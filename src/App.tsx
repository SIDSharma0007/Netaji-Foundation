import React, { useState, useEffect } from 'react';
import { PageTab, Campaign, FinancialReport } from './types';
import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { CampaignsScreen } from './components/CampaignsScreen';
import { TransparencyScreen } from './components/TransparencyScreen';
import { ContactScreen } from './components/ContactScreen';
import { VolunteerModal } from './components/VolunteerModal';
import { ReportViewerModal } from './components/ReportViewerModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [reports, setReports] = useState<FinancialReport[]>(INITIAL_REPORTS);

  // Modals state
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [activeReport, setActiveReport] = useState<FinancialReport | null>(null);

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

  return (
    <div className="min-h-screen bg-[#f7f9ff] flex flex-col font-sans antialiased text-[#181c20]">
      {/* Fixed Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Screen Body View Switcher */}
      <main className="flex-grow pt-20">
        {activeTab === 'home' && (
          <HomeScreen
            campaigns={campaigns}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutScreen setActiveTab={setActiveTab} />
        )}

        {activeTab === 'campaigns' && (
          <CampaignsScreen
            campaigns={campaigns}
          />
        )}

        {activeTab === 'transparency' && (
          <TransparencyScreen
            reports={reports}
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
      />

      {/* Interactive Modals */}
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

