import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Privacy = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={800} gutterBottom>
      Privacy Policy
    </Typography>
    <Box
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
      At Insight Hunter, we take your privacy seriously. This Privacy Policy
      explains how we collect, use, disclose, and protect your information when
      you use our Service at insighthunter.app.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      1. Information We Collect
    </Typography>
    <Typography variant="h6" fontWeight={600} gutterBottom>
      1.1 Information You Provide
    </Typography>
    <ul>
      <li>
        <strong>Account Information:</strong> Name, email address, password,
        company name, and billing information
      </li>
      <li>
        <strong>User Data:</strong> Data files, datasets, and content you upload
        or create using our Service
      </li>
      <li>
        <strong>Communications:</strong> Messages, feedback, and support
        requests you send to us
      </li>
      <li>
        <strong>Payment Information:</strong> Billing details processed through
        our third-party payment processors
      </li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      1.2 Information Collected Automatically
    </Typography>
    <ul>
      <li>
        <strong>Usage Data:</strong> Pages visited, features used, time spent,
        actions taken within the Service
      </li>
      <li>
        <strong>Device Information:</strong> IP address, browser type, operating
        system, device identifiers
      </li>
      <li>
        <strong>Cookies and Similar Technologies:</strong> Session data,
        preferences, and authentication tokens
      </li>
      <li>
        <strong>Analytics:</strong> Aggregated usage patterns and performance
        metrics
      </li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      1.3 Information from Third Parties
    </Typography>
    <Typography paragraph>
      If you connect third-party services (such as data integrations), we may
      receive information from those services in accordance with their terms and
      your authorization.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      2. How We Use Your Information
    </Typography>
    <Typography paragraph>We use the collected information to:</Typography>
    <ul>
      <li>Provide, maintain, and improve the Service</li>
      <li>Process your data analysis requests and generate insights</li>
      <li>Authenticate users and prevent fraud</li>
      <li>Send service-related notifications and updates</li>
      <li>Respond to support requests and communications</li>
      <li>Process payments and manage subscriptions</li>
      <li>Analyze usage patterns to improve user experience</li>
      <li>Develop new features and services</li>
      <li>Comply with legal obligations</li>
      <li>Send marketing communications (with your consent, where required)</li>
    </ul>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      3. Data Storage and Security
    </Typography>
    <Typography paragraph>
      We implement industry-standard security measures to protect your
      information:
    </Typography>
    <ul>
      <li>
        <strong>Encryption:</strong> Data is encrypted in transit (TLS/SSL) and
        at rest (AES-256)
      </li>
      <li>
        <strong>Access Controls:</strong> Strict authentication and
        authorization protocols
      </li>
      <li>
        <strong>Infrastructure:</strong> Secure cloud hosting with reputable
        providers
      </li>
      <li>
        <strong>Monitoring:</strong> Continuous security monitoring and incident
        response
      </li>
      <li>
        <strong>Regular Audits:</strong> Periodic security assessments and
        updates
      </li>
    </ul>
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
        <strong>Note:</strong> While we use reasonable security measures, no
        system is completely secure. We cannot guarantee absolute security of
        your data.
      </Typography>
    </Box>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      4. Data Sharing and Disclosure
    </Typography>
    <Typography paragraph>
      We do not sell your personal information. We may share your information in
      the following circumstances:
    </Typography>
    <Typography variant="h6" fontWeight={600} gutterBottom>
      4.1 Service Providers
    </Typography>
    <Typography paragraph>
      We share data with trusted third-party service providers who assist us in
      operating the Service, including:
    </Typography>
    <ul>
      <li>Cloud hosting and infrastructure providers</li>
      <li>Payment processors</li>
      <li>Analytics and monitoring services</li>
      <li>Customer support tools</li>
      <li>Email communication services</li>
    </ul>
    <Typography paragraph>
      These providers are contractually obligated to protect your data and use
      it only for specified purposes.
    </Typography>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      4.2 Legal Requirements
    </Typography>
    <Typography paragraph>
      We may disclose information if required by law or in response to:
    </Typography>
    <ul>
      <li>Valid legal processes (subpoenas, court orders)</li>
      <li>Requests from government authorities</li>
      <li>Protection of our rights, property, or safety</li>
      <li>Investigation of fraud or security issues</li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      4.3 Business Transfers
    </Typography>
    <Typography paragraph>
      If we are involved in a merger, acquisition, or sale of assets, your
      information may be transferred as part of that transaction. We will notify
      you of any such change and your options.
    </Typography>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      4.4 With Your Consent
    </Typography>
    <Typography paragraph>
      We may share information with your explicit consent for specific purposes
      not covered above.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      5. Your Rights and Choices
    </Typography>
    <Typography paragraph>
      Depending on your location, you may have the following rights:
    </Typography>
    <Typography variant="h6" fontWeight={600} gutterBottom>
      5.1 Access and Portability
    </Typography>
    <ul>
      <li>Request a copy of your personal information</li>
      <li>Export your User Data in a machine-readable format</li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      5.2 Correction and Updates
    </Typography>
    <ul>
      <li>Update or correct your account information</li>
      <li>Request corrections to inaccurate data</li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      5.3 Deletion
    </Typography>
    <ul>
      <li>Request deletion of your account and associated data</li>
      <li>Note: Some data may be retained for legal or operational purposes</li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      5.4 Marketing Opt-Out
    </Typography>
    <ul>
      <li>Unsubscribe from marketing emails via the link in each message</li>
      <li>Manage communication preferences in your account settings</li>
    </ul>

    <Typography variant="h6" fontWeight={600} gutterBottom>
      5.5 Cookie Preferences
    </Typography>
    <ul>
      <li>Manage cookie settings through your browser</li>
      <li>Note: Disabling cookies may affect Service functionality</li>
    </ul>

    <Typography paragraph>
      To exercise these rights, contact us at privacy@insighthunter.app
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      6. Data Retention
    </Typography>
    <Typography paragraph>
      We retain your information for as long as necessary to:
    </Typography>
    <ul>
      <li>Provide the Service and maintain your account</li>
      <li>Comply with legal obligations</li>
      <li>Resolve disputes and enforce our agreements</li>
    </ul>
    <Typography paragraph>
      When you delete your account, we will delete or anonymize your data within
      90 days, except for data we are required to retain by law or for
      legitimate business purposes.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      7. International Data Transfers
    </Typography>
    <Typography paragraph>
      Your information may be transferred to and processed in countries other
      than your country of residence. These countries may have different data
      protection laws. We ensure appropriate safeguards are in place through:
    </Typography>
    <ul>
      <li>Standard contractual clauses</li>
      <li>Data processing agreements</li>
      <li>Compliance with applicable data protection regulations</li>
    </ul>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      8. Children's Privacy
    </Typography>
    <Typography paragraph>
      Our Service is not intended for individuals under the age of 18. We do not
      knowingly collect personal information from children. If we become aware
      that we have collected data from a child without parental consent, we will
      take steps to delete such information.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      9. Cookies and Tracking Technologies
    </Typography>
    <Typography paragraph>
      We use cookies and similar technologies for:
    </Typography>
    <ul>
      <li>
        <strong>Essential Cookies:</strong> Required for authentication and
        Service functionality
      </li>
      <li>
        <strong>Analytics Cookies:</strong> Help us understand how users
        interact with the Service
      </li>
      <li>
        <strong>Preference Cookies:</strong> Remember your settings and
        preferences
      </li>
      <li>
        <strong>Marketing Cookies:</strong> Used to deliver relevant
        advertisements (with consent)
      </li>
    </ul>
    <Typography paragraph>
      You can control cookie preferences through your browser settings, though
      some features may not function properly without cookies.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      10. Third-Party Links
    </Typography>
    <Typography paragraph>
      Our Service may contain links to third-party websites or services. We are
      not responsible for the privacy practices of these third parties. We
      encourage you to review their privacy policies before providing any
      information.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      11. California Privacy Rights (CCPA)
    </Typography>
    <Typography paragraph>
      If you are a California resident, you have additional rights under the
      California Consumer Privacy Act:
    </Typography>
    <ul>
      <li>
        Right to know what personal information is collected, used, and shared
      </li>
      <li>Right to delete personal information</li>
      <li>
        Right to opt-out of the sale of personal information (we do not sell
        personal information)
      </li>
      <li>Right to non-discrimination for exercising your privacy rights</li>
    </ul>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      12. European Union and UK Data Protection (GDPR)
    </Typography>
    <Typography paragraph>
      If you are in the EU or UK, you have rights under the General Data
      Protection Regulation:
    </Typography>
    <ul>
      <li>
        Legal basis for processing (consent, contract, legitimate interests)
      </li>
      <li>Right to withdraw consent at any time</li>
      <li>Right to object to processing</li>
      <li>Right to lodge a complaint with a supervisory authority</li>
      <li>Right to restriction of processing</li>
    </ul>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      13. Changes to This Privacy Policy
    </Typography>
    <Typography paragraph>
      We may update this Privacy Policy from time to time. We will notify you of
      material changes by:
    </Typography>
    <ul>
      <li>Posting the updated policy on our website</li>
      <li>Sending an email notification to your registered email address</li>
      <li>Displaying a prominent notice within the Service</li>
    </ul>
    <Typography paragraph>
      Your continued use of the Service after changes constitutes acceptance of
      the updated Privacy Policy.
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      14. Contact Us
    </Typography>
    <Typography paragraph>
      If you have questions, concerns, or requests regarding this Privacy Policy
      or our data practices, please contact us:
    </Typography>
    <Typography paragraph>
      <strong>Email:</strong> privacy@insighthunter.app
      <br />
      <strong>Website:</strong> insighthunter.app
      <br />
      <strong>Data Protection Officer:</strong> dpo@insighthunter.app
    </Typography>

    <Typography variant="h5" fontWeight={700} gutterBottom>
      15. Your Consent
    </Typography>
    <Typography paragraph>
      By using our Service, you consent to the collection and use of your
      information as described in this Privacy Policy.
    </Typography>
  </Container>
);

export default Privacy;
