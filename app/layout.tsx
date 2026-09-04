import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { ModalProvider } from '@/src/context/ModalContext';

export const metadata: Metadata = {
  title: 'Netaji Subhash Chandra Bose Seva Samity | Grassroots Social Welfare',
  description: 'Established in 2002 in Jamshedpur, Jharkhand. Dedicated to blanket distribution, blood donation drives, hospital patient aid, and marriage support for daughters of the poor.',
  keywords: [
    'Netaji Subhash Chandra Bose Seva Samity',
    'Netaji Foundation Jamshedpur',
    'NGO Jharkhand',
    'Community Development',
    'Blood Donation Jamshedpur',
    'Tata Main Hospital Aid',
    'Blanket Donation Drive'
  ],
  authors: [{ name: 'Netaji Subhash Chandra Bose Seva Samity' }],
  icons: {
    icon: '/images/netaji-logo.png',
    shortcut: '/images/netaji-logo.png',
    apple: '/images/netaji-logo.png',
  },
  openGraph: {
    title: 'Netaji Subhash Chandra Bose Seva Samity | Grassroots Social Welfare',
    description: 'Established in 2002 in Jamshedpur, Jharkhand. Dedicated to blanket distribution, blood donation drives, hospital patient aid, and marriage support for daughters of the poor.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Netaji Subhash Chandra Bose Seva Samity'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f9ff] flex flex-col font-sans antialiased text-[#181c20]">
        <ModalProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
