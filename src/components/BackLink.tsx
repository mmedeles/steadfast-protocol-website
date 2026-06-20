"use client";

import { useRouter } from "next/navigation";

export default function BackLink() {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="text-sm text-muted transition-colors hover:text-text"
        >
            ← Back
        </button>
    );
}
