'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Campaign, FinancialReport } from '@/src/types';
import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from '@/src/data/initialData';
import { VolunteerModal } from '@/src/components/VolunteerModal';
import { ReportViewerModal } from '@/src/components/ReportViewerModal';

interface ModalContextType {
  campaigns: Campaign[];
  reports: FinancialReport[];
  openVolunteerModal: () => void;
  openReportViewer: (report: FinancialReport) => void;
  refreshData: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [reports, setReports] = useState<FinancialReport[]>(INITIAL_REPORTS);

  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [activeReport, setActiveReport] = useState<FinancialReport | null>(null);

  const refreshData = () => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((data) => {
        if (data.campaigns && data.campaigns.length > 0) {
          setCampaigns(data.campaigns);
        }
      })
      .catch(() => console.log('Using default client campaign data'));

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

  const openVolunteerModal = () => {
    setIsVolunteerOpen(true);
  };

  const openReportViewer = (report: FinancialReport) => {
    setActiveReport(report);
  };

  return (
    <ModalContext.Provider
      value={{
        campaigns,
        reports,
        openVolunteerModal,
        openReportViewer,
        refreshData,
      }}
    >
      {children}

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

