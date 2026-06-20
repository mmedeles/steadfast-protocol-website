import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Terms of Service | Steadfast Protocol",
    description: "Terms of Service for Steadfast Protocol, LLC.",
};

const sections = [
    {
        heading: "Services",
        body: "Steadfast Protocol, LLC provides custom software development, AI tooling, and workflow automation services. The specific scope, deliverables, and timeline for any engagement are defined in a separate written agreement or proposal with each client. These terms apply generally to your use of this site and to any engagement, unless that written agreement says otherwise.",
    },
    {
        heading: "Payment Terms",
        body: "Payment terms, including pricing, schedule, and any deposit, are defined per project in the written proposal provided to each client. Work on a project does not begin until that proposal has been accepted and any required deposit has been received. Specific invoicing and payment details will be outlined in your project agreement.",
    },
    {
        heading: "Intellectual Property",
        body: "Once a project is paid in full, the client owns the custom work product created specifically for that engagement. Steadfast Protocol retains ownership of any general-purpose tools, frameworks, or know-how developed independently of a specific client project, even if used in delivering that work. Any exceptions to this would be defined in the project's written agreement.",
    },
    {
        heading: "Limitation of Liability",
        body: "Steadfast Protocol is not liable for indirect, incidental, or consequential damages arising from the use of its services. Total liability for any claim is limited to the amount paid for the specific engagement giving rise to that claim. This limitation applies to the fullest extent permitted by law.",
    },
    {
        heading: "Governing Law",
        body: "These terms, and any engagement with Steadfast Protocol, are governed by the laws of the State of North Dakota, without regard to conflict-of-law principles. Any disputes would be resolved under that governing law. This section would typically be reviewed by counsel to confirm proper jurisdiction and venue.",
    },
    {
        heading: "Changes to These Terms",
        body: "These terms may be updated from time to time, with reasonable notice provided for material changes. Continued engagement with Steadfast Protocol after updated terms are posted constitutes acceptance of those terms. We'll update the date above whenever changes are made.",
    },
];

export default function TermsOfService() {
    return <LegalPage title="Terms of Service" sections={sections} />;
}
