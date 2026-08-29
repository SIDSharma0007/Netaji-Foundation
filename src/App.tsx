import React, { useState, useEffect } from 'react';
import { PageTab, Campaign } from './types';
import { INITIAL_CAMPAIGNS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { CampaignsScreen } from './components/CampaignsScreen';
import { ContactScreen } from './components/ContactScreen';
import { VolunteerModal } from './components/VolunteerModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);

  // Modals state
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

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
    </div>
  );
};

export default App;

