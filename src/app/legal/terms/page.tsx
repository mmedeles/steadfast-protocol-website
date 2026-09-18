import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
    title: "Terms of Service | Steadfast Protocol",
    description: "Terms of Service for Steadfast Protocol, LLC.",
    path: "/legal/terms",
});

const sections = [
    {
        heading: "About These Terms",
        body: "These terms cover your use of steadfastprotocol.com, operated by Steadfast Protocol, LLC. They're a plain-language summary of how we work. They aren't a contract for services. Every client engagement is governed by its own signed agreement.",
    },
    {
        heading: "Our Services",
        body: "Steadfast Protocol provides custom software development, AI tooling and integration, workflow automation, and technical consulting. The descriptions on this site are general. They aren't an offer or a guarantee of any particular result, and the actual work is defined only once scope is agreed in writing.",
    },
    {
        heading: "Client Agreements",
        body: "Before any paid work begins, we agree on a written proposal and a signed agreement that sets out the scope, deliverables, schedule, price, and payment terms for that engagement. If anything in that agreement differs from these terms, the signed agreement controls.",
    },
    {
        heading: "Ownership of Work",
        body: "Once a project is paid in full, ownership of the custom work we create for that client passes to the client. We keep ownership of our pre-existing tools and general know-how, and of anything we build independently of a specific client project. Where any of that is part of a delivery, the client receives the rights needed to use the delivered work. The signed agreement sets out the details for each engagement.",
    },
    {
        heading: "Use of This Site",
        body: "The content on this site is provided for general information. We work to keep it accurate, but it's provided as is, without warranties of any kind. The site's text, design, and branding belong to Steadfast Protocol, LLC and may not be reused without permission.",
    },
    {
        heading: "Limitation of Liability",
        body: "To the fullest extent permitted by law, Steadfast Protocol is not liable for any indirect, incidental, or consequential damages arising from your use of this site or our services. For client work, our total liability is limited to the amount paid under the engagement that gave rise to the claim, unless the signed agreement for that engagement says otherwise.",
    },
    {
        heading: "Governing Law",
        body: "These terms are governed by the laws of the State of North Dakota.",
    },
    {
        heading: "Changes to These Terms",
        body: "If we change these terms, we'll update this page and the date at the top of it. Changes don't affect any signed agreement that's already in place.",
    },
];

export default function TermsOfService() {
    return <LegalPage title="Terms of Service" lastUpdated="September 18, 2026" sections={sections} />;
}
