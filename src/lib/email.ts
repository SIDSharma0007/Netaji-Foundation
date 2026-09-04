import { Resend } from 'resend';
import { ContactMessage, VolunteerApplication } from '../types';

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('your_api_key_here')) {
    return null;
  }
  return new Resend(apiKey.trim());
}

function getRecipientEmail(): string {
  return process.env.MAIL_TO || 'netajisubhasbosesevasamiti@gmail.com';
}

function getSenderEmail(): string {
  return process.env.RESEND_FROM || 'Netaji Seva Samity <onboarding@resend.dev>';
}

export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function sanitizeHeader(value: string): string {
  if (!value) return '';
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function formatDateIST(dateString: string): string {
  try {
    return new Date(dateString).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });
  } catch {
    return dateString;
  }
}

export async function sendContactEmail(data: ContactMessage): Promise<{ success: boolean; simulated?: boolean; error?: string }> {
  const resend = getResendClient();
  const toEmail = getRecipientEmail();
  const fromEmail = getSenderEmail();
  const formattedDate = formatDateIST(data.createdAt);
  const rawFullName = `${data.firstName} ${data.lastName}`.trim();
  const safeFullName = escapeHtml(rawFullName);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);
  const headerFullName = sanitizeHeader(rawFullName);
  const headerSubject = sanitizeHeader(data.subject);

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f6f8; color: #181c20; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e3e8; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background-color: #012d1d; color: #ffffff; padding: 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 12px; color: #a1f4c8; letter-spacing: 0.5px; text-transform: uppercase; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background-color: #cee9d3; color: #012d1d; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; margin-bottom: 18px; text-transform: uppercase; }
    .field-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .field-table tr { border-bottom: 1px solid #ebeef3; }
    .field-table td { padding: 12px 6px; font-size: 14px; vertical-align: top; }
    .field-label { width: 35%; font-weight: 600; color: #414844; }
    .field-value { width: 65%; color: #012d1d; font-weight: 500; }
    .field-value a { color: #012d1d; text-decoration: underline; }
    .message-card { background-color: #f8f9fa; border: 1px solid #e9ecef; border-left: 4px solid #012d1d; border-radius: 8px; padding: 16px; margin-top: 16px; }
    .message-card h3 { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; color: #414844; letter-spacing: 0.5px; }
    .message-card p { margin: 0; font-size: 14px; line-height: 1.6; color: #181c20; white-space: pre-wrap; }
    .footer { background-color: #f1f4f9; padding: 18px 24px; border-top: 1px solid #e0e3e8; font-size: 11px; color: #717973; line-height: 1.5; text-align: center; }
    .footer strong { color: #012d1d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Netaji Subhash Chandra Bose Seva Samity</h1>
      <p>Official Website Portal Notification</p>
    </div>
    <div class="content">
      <div class="badge">New Contact Inquiry Received</div>
      <table class="field-table">
        <tr>
          <td class="field-label">Received At</td>
          <td class="field-value">${formattedDate}</td>
        </tr>
        <tr>
          <td class="field-label">Sender Name</td>
          <td class="field-value">${safeFullName}</td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value"><a href="mailto:${encodeURIComponent(data.email)}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="field-label">Subject</td>
          <td class="field-value">${safeSubject}</td>
        </tr>
      </table>

      <div class="message-card">
        <h3>Message Content</h3>
        <p>${safeMessage}</p>
      </div>
    </div>
    <div class="footer">
      <strong>Netaji Subhash Chandra Bose Seva Samity</strong><br>
      Simul Road, Tinplate, Post: Golmuri, Jamshedpur, East Singhbhum, Jharkhand – 831001<br>
      Helpline: +91 7667936652 | Email: ${toEmail}
    </div>
  </div>
</body>
</html>
  `;

  if (!resend) {
    console.log('\n======================================================');
    console.log('📧 [RESEND DISPATCH (SIMULATED) - NO RESEND_API_KEY IN .env]');
    console.log(`To: ${toEmail}`);
    console.log(`From: ${fromEmail}`);
    console.log(`Reply-To: ${data.email}`);
    console.log(`Subject: [Website Inquiry] ${headerSubject} - From ${headerFullName}`);
    console.log(`Sender: ${headerFullName} <${data.email}>`);
    console.log(`Message: ${data.message}`);
    console.log('======================================================\n');
    return { success: true, simulated: true };
  }

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[Website Inquiry] ${headerSubject} - From ${headerFullName}`,
      text: `New Inquiry from ${headerFullName} (${data.email}):\n\nSubject: ${headerSubject}\n\nMessage:\n${data.message}\n\nSubmitted on: ${formattedDate}`,
      html: htmlContent,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error sending contact email via Resend:', error);
    return { success: false, error: error?.message || 'Unknown email delivery error' };
  }
}

export async function sendVolunteerEmail(data: VolunteerApplication): Promise<{ success: boolean; simulated?: boolean; error?: string }> {
  const resend = getResendClient();
  const toEmail = getRecipientEmail();
  const fromEmail = getSenderEmail();
  const formattedDate = formatDateIST(data.createdAt);
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : '';
  const safeInterestArea = escapeHtml(data.interestArea);
  const safeAvailability = escapeHtml(data.availability);
  const safeNotes = data.notes ? escapeHtml(data.notes) : '';
  const headerFullName = sanitizeHeader(data.fullName);
  const headerInterest = sanitizeHeader(data.interestArea);

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f6f8; color: #181c20; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e3e8; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background-color: #012d1d; color: #ffffff; padding: 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 12px; color: #a1f4c8; letter-spacing: 0.5px; text-transform: uppercase; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background-color: #cee9d3; color: #012d1d; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; margin-bottom: 18px; text-transform: uppercase; }
    .field-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .field-table tr { border-bottom: 1px solid #ebeef3; }
    .field-table td { padding: 12px 6px; font-size: 14px; vertical-align: top; }
    .field-label { width: 38%; font-weight: 600; color: #414844; }
    .field-value { width: 62%; color: #012d1d; font-weight: 500; }
    .field-value a { color: #012d1d; text-decoration: underline; }
    .message-card { background-color: #f8f9fa; border: 1px solid #e9ecef; border-left: 4px solid #012d1d; border-radius: 8px; padding: 16px; margin-top: 16px; }
    .message-card h3 { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; color: #414844; letter-spacing: 0.5px; }
    .message-card p { margin: 0; font-size: 14px; line-height: 1.6; color: #181c20; white-space: pre-wrap; }
    .footer { background-color: #f1f4f9; padding: 18px 24px; border-top: 1px solid #e0e3e8; font-size: 11px; color: #717973; line-height: 1.5; text-align: center; }
    .footer strong { color: #012d1d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Netaji Subhash Chandra Bose Seva Samity</h1>
      <p>Volunteer Registration Portal</p>
    </div>
    <div class="content">
      <div class="badge">New Volunteer Registration</div>
      <table class="field-table">
        <tr>
          <td class="field-label">Received At</td>
          <td class="field-value">${formattedDate}</td>
        </tr>
        <tr>
          <td class="field-label">Applicant Name</td>
          <td class="field-value"><strong>${safeFullName}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value"><a href="mailto:${encodeURIComponent(data.email)}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="field-label">Phone Number</td>
          <td class="field-value">${safePhone ? `<a href="tel:${encodeURIComponent(data.phone)}">${safePhone}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="field-label">Field Interest</td>
          <td class="field-value"><strong>${safeInterestArea}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Availability</td>
          <td class="field-value">${safeAvailability}</td>
        </tr>
      </table>

      ${safeNotes ? `
      <div class="message-card">
        <h3>Additional Notes & Background</h3>
        <p>${safeNotes}</p>
      </div>` : ''}
    </div>
    <div class="footer">
      <strong>Netaji Subhash Chandra Bose Seva Samity</strong><br>
      Simul Road, Tinplate, Post: Golmuri, Jamshedpur, East Singhbhum, Jharkhand – 831001<br>
      Helpline: +91 7667936652 | Email: ${toEmail}
    </div>
  </div>
</body>
</html>
  `;

  if (!resend) {
    console.log('\n======================================================');
    console.log('📧 [RESEND DISPATCH (SIMULATED) - NO RESEND_API_KEY IN .env]');
    console.log(`To: ${toEmail}`);
    console.log(`From: ${fromEmail}`);
    console.log(`Reply-To: ${data.email}`);
    console.log(`Subject: [Volunteer Application] ${headerFullName} - ${headerInterest}`);
    console.log(`Applicant: ${headerFullName} <${data.email}>, Phone: ${data.phone}`);
    console.log(`Interest: ${headerInterest}, Availability: ${safeAvailability}`);
    if (data.notes) console.log(`Notes: ${data.notes}`);
    console.log('======================================================\n');
    return { success: true, simulated: true };
  }

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[Volunteer Application] ${headerFullName} - ${headerInterest}`,
      text: `New Volunteer Application from ${headerFullName}:\n\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nInterest: ${headerInterest}\nAvailability: ${data.availability}\nNotes: ${data.notes || 'N/A'}\n\nSubmitted on: ${formattedDate}`,
      html: htmlContent,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error sending volunteer email via Resend:', error);
    return { success: false, error: error?.message || 'Unknown email delivery error' };
  }
}

