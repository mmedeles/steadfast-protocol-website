import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Privacy Policy | Steadfast Protocol",
    description: "Privacy Policy for Steadfast Protocol, LLC.",
};

const sections = [
    {
        heading: "1. Information We Collect",
        body: "This section will describe the types of information collected from visitors and clients.",
    },
    {
        heading: "2. How We Use Your Information",
        body: "This section will explain how collected information is used to provide and improve services.",
    },
    {
        heading: "3. Information Sharing",
        body: "This section will describe whether and how information may be shared with third parties.",
    },
    {
        heading: "4. Data Retention",
        body: "This section will describe how long information is retained and how it is eventually deleted.",
    },
    {
        heading: "5. Contact Us",
        body: "This section will explain how visitors can reach us with questions about this policy.",
    },
];

export default function PrivacyPolicy() {
    return <LegalPage title="Privacy Policy" sections={sections} />;
}
