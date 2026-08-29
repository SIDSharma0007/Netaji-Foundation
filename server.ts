import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { INITIAL_CAMPAIGNS } from './src/data/initialData.js';
import { Campaign, ContactMessage, VolunteerApplication } from './src/types.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory persistent database stores
  let campaigns: Campaign[] = [...INITIAL_CAMPAIGNS];
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
