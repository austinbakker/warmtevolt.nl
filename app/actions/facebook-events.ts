"use server";

import { createHash } from "crypto";

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "848579814762047";
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
// Set this to your test event code from Meta Events Manager for debugging
// Remove or set to undefined in production
const TEST_EVENT_CODE = process.env.FACEBOOK_TEST_EVENT_CODE;

type ContactData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode?: string;
    city?: string;
    eventId: string;
    url: string;
};

// SHA-256 Hashing helper
function hash(input: string): string {
    if (!input) return "";
    const normalized = input.trim().toLowerCase();
    return createHash("sha256").update(normalized).digest("hex");
}

export async function sendContactEvent(data: ContactData) {
    if (!ACCESS_TOKEN) {
        console.error("Facebook CAPI: Missing FACEBOOK_ACCESS_TOKEN environment variable.");
        return { success: false, error: "Missing Access Token" };
    }

    const eventData: Record<string, unknown> = {
        event_name: "Contact",
        event_time: Math.floor(Date.now() / 1000),
        event_id: data.eventId,
        event_source_url: data.url,
        action_source: "website",
        user_data: {
            em: [hash(data.email)],
            ph: [hash(data.phone)],
            fn: [hash(data.firstName)],
            ln: [hash(data.lastName)],
            zp: data.zipcode ? [hash(data.zipcode)] : undefined,
            ct: data.city ? [hash(data.city)] : undefined,
            country: ["nl"],
        },
    };

    const payload: Record<string, unknown> = {
        data: [eventData],
    };

    // Add test_event_code for debugging in Meta Events Manager
    if (TEST_EVENT_CODE) {
        payload.test_event_code = TEST_EVENT_CODE;
    }

    try {
        const response = await fetch(
            `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error("Facebook CAPI Error:", JSON.stringify(result, null, 2));
            return { success: false, error: result };
        }

        console.log("Facebook CAPI Success:", JSON.stringify(result, null, 2));
        return { success: true, data: result };
    } catch (error) {
        console.error("Facebook CAPI Network Error:", error);
        return { success: false, error: "Network error" };
    }
}
