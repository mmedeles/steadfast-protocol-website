import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Terms of Service | Steadfast Protocol",
    description: "Terms of Service for Steadfast Protocol, LLC.",
};

const sections = [
    {
        heading: "1. Services",
        body: "This section will describe the services Steadfast Protocol provides and how engagements are scoped.",
    },
    {
        heading: "2. Payment Terms",
        body: "This section will describe invoicing, payment schedules, and accepted payment methods.",
    },
    {
        heading: "3. Intellectual Property",
        body: "This section will describe ownership of code, designs, and other deliverables.",
    },
    {
        heading: "4. Limitation of Liability",
        body: "This section will describe the limits of Steadfast Protocol's liability under these terms.",
    },
    {
        heading: "5. Governing Law",
        body: "This section will specify which state's laws govern this agreement.",
    },
    {
        heading: "6. Contact",
        body: "This section will explain how to reach us with questions about these terms.",
    },
];

export default function TermsOfService() {
    return <LegalPage title="Terms of Service" sections={sections} />;
}
