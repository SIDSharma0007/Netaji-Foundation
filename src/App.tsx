import React, { useState, useEffect } from 'react';
import { PageTab, Campaign, Donation, FinancialReport } from './types';
import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { CampaignsScreen } from './components/CampaignsScreen';
import { TransparencyScreen } from './components/TransparencyScreen';
import { ContactScreen } from './components/ContactScreen';
import { DonateModal } from './components/DonateModal';
import { ReceiptModal } from './components/ReceiptModal';
import { VolunteerModal } from './components/VolunteerModal';
import { ReportViewerModal } from './components/ReportViewerModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [reports, setReports] = useState<FinancialReport[]>(INITIAL_REPORTS);

  // Modals state
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedDonateCampaignId, setSelectedDonateCampaignId] = useState<string | undefined>();
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [activeReport, setActiveReport] = useState<FinancialReport | null>(null);
  const [completedDonation, setCompletedDonation] = useState<Donation | null>(null);

  // Fetch initial backend data
  useEffect(() => {
    // Fetch campaigns
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((data) => {
        if (data.campaigns && data.campaigns.length > 0) {
          setCampaigns(data.campaigns);
        }
      })
      .catch(() => console.log('Using default client campaign data'));

    // Fetch audit donations
    fetch('/api/donations')
      .then((res) => res.json())
      .then((data) => {
        if (data.donations) {
          setDonations(data.donations);
        }
      })
      .catch(() => console.log('Using default client donation logs'));

    // Fetch transparency reports
    fetch('/api/transparency')
      .then((res) => res.json())
      .then((data) => {
        if (data.reports) {
          setReports(data.reports);
        }
      })
      .catch(() => console.log('Using default financial reports'));
  }, []);

  const openDonateModal = (campaignId?: string) => {
    setSelectedDonateCampaignId(campaignId);
    setIsDonateOpen(true);
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
                donorsCount: c.donorsCount + 1
              };
            }
            return c;
          })
        );
      });
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] flex flex-col font-sans antialiased text-[#181c20]">
      {/* Fixed Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDonateModal={openDonateModal}
      />

      {/* Main Screen Body View Switcher */}
      <main className="flex-grow pt-20">
        {activeTab === 'home' && (
          <HomeScreen
            campaigns={campaigns}
            setActiveTab={setActiveTab}
            openDonateModal={openDonateModal}
          />
        )}

        {activeTab === 'about' && (
          <AboutScreen setActiveTab={setActiveTab} />
        )}

        {activeTab === 'campaigns' && (
          <CampaignsScreen
            campaigns={campaigns}
            openDonateModal={openDonateModal}
          />
        )}

        {activeTab === 'transparency' && (
          <TransparencyScreen
            reports={reports}
            donations={donations}
            openReportViewer={(report) => setActiveReport(report)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactScreen openVolunteerModal={() => setIsVolunteerOpen(true)} />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openDonateModal={openDonateModal}
      />

      {/* Interactive Modals */}
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
    </div>
  );
};

export default App;
