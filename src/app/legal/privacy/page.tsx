import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Privacy Policy | Steadfast Protocol",
    description: "Privacy Policy for Steadfast Protocol, LLC.",
};

const sections = [
    {
        heading: "Information We Collect",
        body: "We collect information you provide directly, such as your name and email address when you submit the contact form. We may also collect basic analytics data about how visitors use this site, such as page views, if analytics tools are enabled. We do not collect personal information without your knowledge, and you're never required to provide more than what's needed to respond to your inquiry.",
    },
    {
        heading: "How We Use Your Information",
        body: "Information submitted through this site is used only to respond to your inquiry and, if you become a client, to deliver the services outlined in your agreement. We do not sell your information, and we do not share it with third parties for marketing purposes. Any use beyond responding to your request would require your separate agreement.",
    },
    {
        heading: "Data Retention",
        body: "Contact form submissions are retained only as long as necessary to respond to your inquiry or fulfill an active engagement. We do not maintain long-term storage of personal data beyond that purpose unless you've agreed to a longer retention period as part of a service agreement. You may request earlier deletion at any time.",
    },
    {
        heading: "Third-Party Services",
        body: "This site may rely on third-party tools for functions like hosting and analytics. Each of those providers maintains its own privacy practices and data handling policies, which are outside our direct control. We choose providers we believe handle data responsibly, but we encourage you to review their policies if you have concerns.",
    },
    {
        heading: "Your Rights",
        body: "You may request access to, or deletion of, any personal data we hold about you at any time. To make a request, contact us directly at mmedeles@steadfastprotocol.com. We'll respond to reasonable requests as promptly as we can.",
    },
    {
        heading: "Changes to This Policy",
        body: "This policy may be updated from time to time to reflect changes in our practices or for legal and regulatory reasons. We'll update the date above whenever changes are made. Continued use of this site after changes are posted constitutes acceptance of the updated policy.",
    },
];

export default function PrivacyPolicy() {
    return <LegalPage title="Privacy Policy" sections={sections} />;
}
