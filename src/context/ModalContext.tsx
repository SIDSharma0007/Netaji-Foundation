'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Campaign } from '@/src/types';
import { INITIAL_CAMPAIGNS } from '@/src/data/initialData';
import { VolunteerModal } from '@/src/components/VolunteerModal';

interface ModalContextType {
  campaigns: Campaign[];
  openVolunteerModal: () => void;
  refreshData: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  const refreshData = () => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((data) => {
        if (data.campaigns && data.campaigns.length > 0) {
          setCampaigns(data.campaigns);
        }
      })
      .catch(() => console.log('Using default client campaign data'));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const openVolunteerModal = () => {
    setIsVolunteerOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        campaigns,
        openVolunteerModal,
        refreshData,
      }}
    >
      {children}

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
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

