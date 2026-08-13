import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { INITIAL_CAMPAIGNS, INITIAL_REPORTS } from './src/data/initialData.js';
import { Campaign, Donation, FinancialReport, ContactMessage, VolunteerApplication } from './src/types.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory persistent database stores
  let campaigns: Campaign[] = [...INITIAL_CAMPAIGNS];
  let reports: FinancialReport[] = [...INITIAL_REPORTS];
  let donations: Donation[] = [
    {
      id: 'd-101',
      campaignId: 'c1',
      campaignTitle: 'Rural Literacy Initiative',
      amount: 2500,
      fullName: 'Priya Sharma',
      email: 'priya.sharma@example.in',
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      receiptNumber: 'NF-2026-88421',
      paymentMethod: 'UPI / Razorpay (SSL Encrypted)'
    },
    {
      id: 'd-102',
      campaignId: 'c2',
      campaignTitle: 'Clean Water & Handpump Access',
      amount: 5000,
      fullName: 'Rajesh Kumar',
      email: 'rajesh.k@example.org.in',
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      receiptNumber: 'NF-2026-88422',
      paymentMethod: 'NetBanking / Razorpay'
    }
  ];

  let contactMessages: ContactMessage[] = [];
  let volunteerApplications: VolunteerApplication[] = [];

  // API ROUTES
  // Healthcheck
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', organization: 'Netaji Foundation', timestamp: new Date().toISOString() });
  });

  // GET /api/campaigns
  app.get('/api/campaigns', (_req, res) => {
    res.json({ campaigns });
  });

  // GET /api/campaigns/:id
  app.get('/api/campaigns/:id', (req, res) => {
    const campaign = campaigns.find(c => c.id === req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    res.json({ campaign });
  });

  // POST /api/donations (Process donation)
  app.post('/api/donations', (req, res) => {
    const { campaignId, amount, fullName, email, paymentMethod } = req.body;

    if (!amount || amount <= 0 || !fullName || !email) {
      return res.status(400).json({ error: 'Please provide valid donation details.' });
    }

    const numericAmount = Number(amount);
    let targetCampaign = campaigns.find(c => c.id === campaignId);

    if (targetCampaign) {
      targetCampaign.raisedAmount += numericAmount;
      targetCampaign.donorsCount += 1;
      targetCampaign.percentage = Math.min(100, Math.round((targetCampaign.raisedAmount / targetCampaign.goalAmount) * 100));
    }

    const receiptNumber = `NF-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const newDonation: Donation = {
      id: `d-${Date.now()}`,
      campaignId: targetCampaign ? targetCampaign.id : undefined,
      campaignTitle: targetCampaign ? targetCampaign.title : 'General Foundation Fund',
      amount: numericAmount,
      fullName,
      email,
      createdAt: new Date().toISOString(),
      receiptNumber,
      paymentMethod: paymentMethod || 'Credit Card (SSL Encrypted)'
    };

    donations.unshift(newDonation);

    res.status(201).json({
      message: 'Donation processed successfully. Thank you for supporting Netaji Foundation!',
      donation: newDonation,
      updatedCampaign: targetCampaign
    });
  });

  // GET /api/donations (Audit log list)
  app.get('/api/donations', (_req, res) => {
    res.json({ donations, totalDonations: donations.reduce((sum, d) => sum + d.amount, 0) });
  });

  // GET /api/transparency (Financial metrics & reports)
  app.get('/api/transparency', (_req, res) => {
    const totalRaised = campaigns.reduce((acc, c) => acc + c.raisedAmount, 0) + 250000000;
    res.json({
      metrics: {
        totalRaisedFormatted: `₹25 Cr+`,
        livesImpactedFormatted: '50K+',
        activeProjectsCount: campaigns.length + 120,
        fundAllocation2023: {
          programs: 80,
          admin: 12,
          fundraising: 8
        }
      },
      reports
    });
  });

  // POST /api/contact
  app.post('/api/contact', (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;
    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'First name, email, and message are required.' });
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      firstName,
      lastName: lastName || '',
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toISOString()
    };

    contactMessages.push(newMessage);
    res.status(201).json({ message: 'Your message has been received! We will respond promptly.', contactMessage: newMessage });
  });

  // POST /api/volunteer
  app.post('/api/volunteer', (req, res) => {
    const { fullName, email, phone, interestArea, availability, notes } = req.body;
    if (!fullName || !email) {
      return res.status(400).json({ error: 'Full name and email are required for volunteer signup.' });
    }

    const application: VolunteerApplication = {
      id: `vol-${Date.now()}`,
      fullName,
      email,
      phone: phone || '',
      interestArea: interestArea || 'General Support',
      availability: availability || 'Flexible',
      notes,
      createdAt: new Date().toISOString()
    };

    volunteerApplications.push(application);
    res.status(201).json({ message: 'Volunteer application submitted successfully! Welcome to Netaji Foundation.', application });
  });

  // Vite integration for dev server or static serving in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
