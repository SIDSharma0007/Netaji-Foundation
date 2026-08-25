import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { ModalProvider } from '@/src/context/ModalContext';

export const metadata: Metadata = {
  title: 'Netaji Foundation - Empowering Communities, Building Futures',
  description: 'Empowering local communities through sustainable development, education, health initiatives, and absolute financial transparency.',
  keywords: [
    'Netaji Foundation',
    'NGO',
    'Non-Profit',
    'Community Development',
    'Section 80G Tax Exemption',
    'Rural Literacy',
    'Clean Water India',
    'Financial Transparency'
  ],
  authors: [{ name: 'Netaji Foundation' }],
  openGraph: {
    title: 'Netaji Foundation - Empowering Communities, Building Futures',
    description: 'Empowering local communities through sustainable development, education, health initiatives, and absolute financial transparency.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Netaji Foundation'
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
