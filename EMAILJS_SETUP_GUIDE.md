# EmailJS Setup Guide for RFP Form

This guide will help you set up EmailJS to receive RFP form submissions at **saifulofficial025@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the sidebar
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email service)
4. Click **Connect Account** and authorize your Gmail account (saifulofficial025@gmail.com)
5. Give your service a name (e.g., "RFP Form Service")
6. Click **Create Service**
7. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Use this template content:

**Template Settings:**

- Template Name: `rfp_form_submission`

**Email Content:**

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

{{message}}
```

**To Email:** `saifulofficial025@gmail.com`

4. Click **Save**
5. **Copy the Template ID** - you'll need this

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the sidebar
2. Find your **Public Key** under the API Keys section
3. **Copy the Public Key**

## Step 5: Update Your Code

Open `src/Pages/Contact/RFPFormEmailWork.jsx` and replace these values:

```javascript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID from Step 3
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your Public Key from Step 4
```

## Step 6: Test the Form

1. Fill out the RFP form on your website
2. Click "SEND"
3. Check your email at saifulofficial025@gmail.com
4. You should receive an email with all the form data

## Troubleshooting

### Not receiving emails?

- Check your spam/junk folder
- Verify all three IDs are correctly copied in the code
- Check the browser console for any errors
- Make sure your EmailJS account is verified

### "Failed to send" error?

- Check your internet connection
- Verify your EmailJS service is active
- Check browser console for detailed error messages

## Email Format

You will receive emails with this structure:

- Subject: RFP Form Submission - [Project Name]
- From: [Sender's Name and Email]
- Body: All form fields neatly formatted including:
  - Basic Information (Name, Email, Message)
  - Project Information (Company, Project Name, Area, Location)
  - Project Type selections
  - Service Type selections
  - Design preferences
  - Timeline information
  - Scope of Works selections
  - Nominations
  - List of attached files

## Free Tier Limits

EmailJS free tier allows:

- 200 emails per month
- 5 email templates
- 2 email services

This should be sufficient for most RFP form submissions!

## Alternative: Backend Solution

If you prefer a backend solution or need to send actual file attachments (not just file names), you can:

1. Create a Node.js/Express backend
2. Use Nodemailer or SendGrid
3. Handle file uploads on the server
4. See the alternative function `sendRFPEmailViaBackend` in RFPFormEmailWork.jsx

---

**Need Help?** Contact EmailJS support at https://www.emailjs.com/docs/
