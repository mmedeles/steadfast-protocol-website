import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map((route) => ({
        url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    }));
}
