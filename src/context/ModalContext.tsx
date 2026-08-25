'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Campaign, Donation, FinancialReport } from '@/src/types';
import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from '@/src/data/initialData';
import { DonateModal } from '@/src/components/DonateModal';
import { ReceiptModal } from '@/src/components/ReceiptModal';
import { VolunteerModal } from '@/src/components/VolunteerModal';
import { ReportViewerModal } from '@/src/components/ReportViewerModal';

interface ModalContextType {
  campaigns: Campaign[];
  donations: Donation[];
  reports: FinancialReport[];
  openDonateModal: (campaignId?: string) => void;
  openVolunteerModal: () => void;
  openReportViewer: (report: FinancialReport) => void;
  handleDonationSuccess: (donation: Donation) => void;
  refreshData: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [reports, setReports] = useState<FinancialReport[]>(INITIAL_REPORTS);

  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedDonateCampaignId, setSelectedDonateCampaignId] = useState<string | undefined>();
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [activeReport, setActiveReport] = useState<FinancialReport | null>(null);
  const [completedDonation, setCompletedDonation] = useState<Donation | null>(null);

  const refreshData = () => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((data) => {
        if (data.campaigns && data.campaigns.length > 0) {
          setCampaigns(data.campaigns);
        }
      })
      .catch(() => console.log('Using default client campaign data'));

    fetch('/api/donations')
      .then((res) => res.json())
      .then((data) => {
        if (data.donations) {
          setDonations(data.donations);
        }
      })
      .catch(() => console.log('Using default client donation logs'));

    fetch('/api/transparency')
      .then((res) => res.json())
      .then((data) => {
        if (data.reports) {
          setReports(data.reports);
        }
      })
      .catch(() => console.log('Using default financial reports'));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const openDonateModal = (campaignId?: string) => {
    setSelectedDonateCampaignId(campaignId);
    setIsDonateOpen(true);
  };

  const openVolunteerModal = () => {
    setIsVolunteerOpen(true);
  };

  const openReportViewer = (report: FinancialReport) => {
    setActiveReport(report);
  };

  const handleDonationSuccess = (donation: Donation) => {
    setCompletedDonation(donation);
    setDonations((prev) => [donation, ...prev]);

    // Refresh campaigns to reflect updated raised amount
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((data) => {
        if (data.campaigns) setCampaigns(data.campaigns);
      })
      .catch(() => {
        setCampaigns((prev) =>
          prev.map((c) => {
            if (c.id === donation.campaignId) {
              const newRaised = c.raisedAmount + donation.amount;
              return {
                ...c,
                raisedAmount: newRaised,
                percentage: Math.min(100, Math.round((newRaised / c.goalAmount) * 100)),
                donorsCount: c.donorsCount + 1,
              };
            }
            return c;
          })
        );
      });
  };

  return (
    <ModalContext.Provider
      value={{
        campaigns,
        donations,
        reports,
        openDonateModal,
        openVolunteerModal,
        openReportViewer,
        handleDonationSuccess,
        refreshData,
      }}
    >
      {children}

      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        campaigns={campaigns}
        selectedCampaignId={selectedDonateCampaignId}
        onDonationSuccess={handleDonationSuccess}
      />

      <ReceiptModal
        donation={completedDonation}
        onClose={() => setCompletedDonation(null)}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      <ReportViewerModal
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
