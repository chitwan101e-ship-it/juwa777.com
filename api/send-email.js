// Vercel Serverless Function for sending emails via Namecheap SMTP
// This file should be in the /api folder at the root of your project

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS for cross-origin requests (if frontend is on different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get form data from request
  const { name, userEmail, phoneNumber, message } = req.body;

  // Validate input
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: 'Name is required (at least 2 characters)' });
  }

  if (!userEmail || !userEmail.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!message || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' });
  }

  try {
    // Namecheap Private Email SMTP Configuration
    // Replace these with your actual Namecheap email credentials
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com', // Namecheap Private Email SMTP server
      port: 587, // Use 587 for TLS or 465 for SSL
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NAMECHEAP_EMAIL, // support@juwagame.com
        pass: process.env.NAMECHEAP_PASSWORD, // Your email password
      },
      tls: {
        rejectUnauthorized: false // Set to true in production if you have proper SSL
      }
    });

    // Email content
    const mailOptions = {
      from: `"Juwa Contact Form" <${process.env.NAMECHEAP_EMAIL}>`,
      to: process.env.NAMECHEAP_EMAIL, // support@juwagame.com
      replyTo: userEmail, // So you can reply directly to the user
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the contact form on juwa777.com
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${userEmail}
${phoneNumber ? `Phone: ${phoneNumber}` : ''}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
This email was sent from the contact form on juwa777.com
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
}

