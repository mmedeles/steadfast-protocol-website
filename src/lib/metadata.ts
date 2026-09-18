import type { Metadata } from "next";

export const SITE_URL = "https://steadfastprotocol.com";
export const SITE_NAME = "Steadfast Protocol";

export const OG_IMAGE = {
    url: "/05-platform/open-graph-1200x630.png",
    width: 1200,
    height: 630,
};

export const ROUTES = ["/", "/services", "/about", "/contact", "/legal/privacy", "/legal/terms"];

// Metadata merges shallowly, so a page that sets `openGraph` replaces the root
// layout's entirely — the image has to be restated alongside the per-page url.
export function pageMetadata({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title,
            description,
            url: path,
            siteName: SITE_NAME,
            type: "website",
            images: [OG_IMAGE],
        },
    };
}
