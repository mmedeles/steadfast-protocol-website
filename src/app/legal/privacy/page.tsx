import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
    title: "Privacy Policy | Steadfast Protocol",
    description: "Privacy Policy for Steadfast Protocol, LLC.",
    path: "/legal/privacy",
});

const sections = [
    {
        heading: "Who We Are",
        body: "This policy covers steadfastprotocol.com, operated by Steadfast Protocol, LLC, a software development and automation consultancy based in Bismarck, North Dakota. It explains what information we collect through this site and what we do with it.",
    },
    {
        heading: "Information We Collect",
        body: "When you contact us through the contact form, you give us your name and email address, and optionally your company name, the topic of your inquiry, and your message. The same applies if you email or call us directly. We don't ask for more than we need to respond, and we don't collect information about you from other sources. The form is handled by Formspree, a third-party service that receives your submission and passes it on to us by email; their own privacy policy covers what they do with it while it's in their hands.",
    },
    {
        heading: "Analytics and Cookies",
        body: "This site does not currently use analytics, advertising, or tracking cookies. If we add analytics in the future, it will be limited to basic usage information such as page views, and we'll update this policy before it's turned on. Like any website, our hosting provider may keep standard technical logs, such as IP addresses and request times, to operate and secure the site.",
    },
    {
        heading: "How We Use Your Information",
        body: "We use what you send us to respond to your inquiry and, if we end up working together, to scope and deliver the project. That's it. We don't sell your information, rent it, or share it with anyone for marketing purposes.",
    },
    {
        heading: "How Long We Keep It",
        body: "We keep inquiry details only as long as we need them to respond or to carry out an engagement. Records for client projects are kept as long as the client agreement requires or as needed for ordinary business and tax purposes.",
    },
    {
        heading: "Your Choices",
        body: "You can ask us at any time what information we hold about you, or ask us to correct or delete it. Send the request to mmedeles@steadfastprotocol.com and we'll take care of it, unless we're required to keep something for legal or accounting reasons, in which case we'll tell you.",
    },
    {
        heading: "Changes to This Policy",
        body: "If our practices change, we'll update this page and the date at the top of it.",
    },
];

export default function PrivacyPolicy() {
    return <LegalPage title="Privacy Policy" lastUpdated="September 18, 2026" sections={sections} />;
}
