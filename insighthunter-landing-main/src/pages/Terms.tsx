import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Terms = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={800} gutterBottom>
      Terms of Service
    </Typography>
    <Box
      className="effective-date"
      sx={{
        backgroundColor: "rgba(33, 128, 141, 0.08)",
        p: 2,
        borderRadius: 1,
        mb: 3,
        color: "primary.main",
        fontWeight: 600,
      }}
    >
      Effective Date: November 3, 2025
    </Box>

    <Typography paragraph>
      Welcome to Insight Hunter. By accessing or using our service at
      insighthunter.app ("Service"), you agree to be bound by these Terms of
      Service ("Terms"). Please read them carefully.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      1. Acceptance of Terms
    </Typography>
    <Typography paragraph>
      By creating an account or using Insight Hunter, you acknowledge that you
      have read, understood, and agree to be bound by these Terms and our
      Privacy Policy. If you do not agree, please do not use our Service.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      2. Description of Service
    </Typography>
    <Typography paragraph>
      Insight Hunter provides data analysis, visualization, and intelligence
      tools ("Service") that help users discover patterns, trends, and insights
      from their data. We reserve the right to modify, suspend, or discontinue
      any aspect of the Service at any time.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      3. Account Registration
    </Typography>
    <Typography paragraph>
      To use certain features of the Service, you must register for an account.
      You agree to:
    </Typography>
    <ul>
      <li>
        Provide accurate, current, and complete information during registration
      </li>
      <li>Maintain and promptly update your account information</li>
      <li>Keep your password secure and confidential</li>
      <li>Notify us immediately of any unauthorized access to your account</li>
      <li>Be responsible for all activities that occur under your account</li>
    </ul>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      4. Acceptable Use
    </Typography>
    <Typography paragraph>You agree not to:</Typography>
    <ul>
      <li>
        Use the Service for any illegal purpose or in violation of any laws
      </li>
      <li>
        Violate or infringe upon the rights of others, including intellectual
        property rights
      </li>
      <li>Upload or transmit viruses, malware, or any malicious code</li>
      <li>
        Attempt to gain unauthorized access to our systems or other users'
        accounts
      </li>
      <li>Interfere with or disrupt the Service or servers</li>
      <li>
        Use automated systems (bots, scrapers) without our express written
        permission
      </li>
      <li>
        Reverse engineer, decompile, or disassemble any aspect of the Service
      </li>
      <li>
        Resell, redistribute, or provide access to the Service to third parties
        without authorization
      </li>
    </ul>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      5. User Data and Content
    </Typography>
    <Typography paragraph>
      You retain all rights to the data and content you upload to the Service
      ("User Data"). By uploading User Data, you grant us a limited license to:
    </Typography>
    <ul>
      <li>Store, process, and analyze your data to provide the Service</li>
      <li>Create backups and ensure data security</li>
      <li>
        Generate aggregated, anonymized analytics (that cannot identify you or
        your data)
      </li>
    </ul>
    <Typography paragraph>
      You represent and warrant that you have all necessary rights to upload
      your User Data and that it does not violate any laws or third-party
      rights.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      6. Subscription and Payment
    </Typography>
    <Typography paragraph>
      Certain features require a paid subscription. You agree to:
    </Typography>
    <ul>
      <li>Pay all fees associated with your selected plan</li>
      <li>Provide accurate and current billing information</li>
      <li>
        Authorize automatic renewal unless cancelled before the renewal date
      </li>
    </ul>
    <Typography paragraph>
      We reserve the right to change our pricing with 30 days' notice. Refunds
      are handled on a case-by-case basis at our discretion.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      7. Intellectual Property
    </Typography>
    <Typography paragraph>
      The Service, including all software, algorithms, designs, text, graphics,
      and other content (excluding User Data), is owned by Insight Hunter and
      protected by copyright, trademark, and other intellectual property laws.
      You may not copy, modify, distribute, or create derivative works without
      our express written permission.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      8. Third-Party Services
    </Typography>
    <Typography paragraph>
      Our Service may integrate with or link to third-party services. We are not
      responsible for the content, privacy practices, or terms of service of any
      third-party services. Your use of third-party services is at your own
      risk.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      9. Disclaimers and Limitations of Liability
    </Typography>
    <Box
      sx={{
        backgroundColor: "rgba(168, 75, 47, 0.08)",
        p: 2,
        borderLeft: "4px solid #a84b2f",
        borderRadius: 1,
        mb: 3,
      }}
    >
      <Typography fontWeight={600}>
        <strong>IMPORTANT:</strong> The Service is provided "as is" and "as
        available" without warranties of any kind, either express or implied,
        including but not limited to warranties of merchantability, fitness for
        a particular purpose, or non-infringement.
      </Typography>
    </Box>
    <Typography paragraph>We do not guarantee that:</Typography>
    <ul>
      <li>The Service will be uninterrupted, secure, or error-free</li>
      <li>Results or insights will be accurate, complete, or reliable</li>
      <li>Any errors will be corrected</li>
    </ul>
    <Typography paragraph>
      To the maximum extent permitted by law, Insight Hunter shall not be liable
      for any indirect, incidental, special, consequential, or punitive damages,
      including loss of profits, data, or business opportunities, arising from
      your use of the Service.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      10. Indemnification
    </Typography>
    <Typography paragraph>
      You agree to indemnify and hold harmless Insight Hunter, its officers,
      directors, employees, and agents from any claims, damages, losses,
      liabilities, and expenses (including legal fees) arising from your use of
      the Service, violation of these Terms, or infringement of any rights of
      another party.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      11. Termination
    </Typography>
    <Typography paragraph>
      We may suspend or terminate your account at any time for:
    </Typography>
    <ul>
      <li>Violation of these Terms</li>
      <li>Fraudulent or illegal activity</li>
      <li>Extended periods of inactivity</li>
      <li>Any reason at our discretion with or without notice</li>
    </ul>
    <Typography paragraph>
      You may terminate your account at any time through your account settings.
      Upon termination, your right to use the Service immediately ceases, and we
      may delete your User Data in accordance with our data retention policies.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      12. Changes to Terms
    </Typography>
    <Typography paragraph>
      We reserve the right to modify these Terms at any time. We will notify you
      of material changes via email or through the Service. Your continued use
      of the Service after changes constitutes acceptance of the modified Terms.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      13. Governing Law and Dispute Resolution
    </Typography>
    <Typography paragraph>
      These Terms are governed by and construed in accordance with the laws of
      [Your Jurisdiction], without regard to conflict of law principles. Any
      disputes shall be resolved through binding arbitration in accordance with
      the rules of [Arbitration Association], except that either party may seek
      injunctive relief in court for intellectual property disputes.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      14. General Provisions
    </Typography>
    <Typography paragraph>
      <strong>Entire Agreement:</strong> These Terms, together with our Privacy
      Policy, constitute the entire agreement between you and Insight Hunter.
    </Typography>
    <Typography paragraph>
      <strong>Severability:</strong> If any provision is found to be
      unenforceable, the remaining provisions will remain in full effect.
    </Typography>
    <Typography paragraph>
      <strong>Waiver:</strong> Our failure to enforce any right or provision
      does not constitute a waiver of that right or provision.
    </Typography>
    <Typography paragraph>
      <strong>Assignment:</strong> You may not assign or transfer these Terms
      without our written consent. We may assign our rights without restriction.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      15. Contact Information
    </Typography>
    <Typography paragraph>
      For questions about these Terms, please contact us at:
    </Typography>
    <Typography paragraph>
      Email: legal@insighthunter.app
      <br />
      Website: insighthunter.app
    </Typography>
  </Container>
);

export default Terms;
