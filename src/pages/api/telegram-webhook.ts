export const prerender = false;

import type { APIRoute } from "astro";
import { getStore } from "@netlify/blobs";

interface Lead {
    id: string;
    timestamp: string;
    source: string;
    name?: string;
    phone?: string;
    email: string;
    service?: string;
    zip?: string;
    gclid?: string;
    yclid?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    ga_client_id?: string;
    ym_client_id?: string;
}

// Save lead to Netlify Blobs
async function saveLead(lead: Lead): Promise<void> {
    try {
        const store = getStore("leads");

        // Get existing leads
        let leads: Lead[] = [];
        try {
            const existingData = await store.get("all-leads", { type: "json" });
            if (existingData && Array.isArray(existingData)) {
                leads = existingData as Lead[];
            }
        } catch {
            leads = [];
        }

        // Add new lead
        leads.unshift(lead);

        // Save back
        await store.setJSON("all-leads", leads);
    } catch (error) {
        console.error("Error saving lead:", error);
    }
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const {
            service,
            zip,
            name,
            phone,
            email,
            source = "hero",
            gclid,
            yclid,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            ga_client_id,
            ym_client_id,
        } = data;

        // Environment variables for secrets
        const BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID;

        // Create lead object
        const lead: Lead = {
            id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString(),
            source,
            name,
            phone,
            email,
            service,
            zip,
            gclid,
            yclid,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            ga_client_id,
            ym_client_id,
        };

        // Save lead to storage
        await saveLead(lead);

        // Skip Telegram if not configured
        if (!BOT_TOKEN || !CHAT_ID) {
            return new Response(
                JSON.stringify({
                    message: "Lead saved (Telegram not configured)",
                    lead_id: lead.id,
                }),
                { status: 200 },
            );
        }

        let message = `
🚀 <b>New Lead!</b>

👤 <b>Name:</b> ${name || "N/A"}
📞 <b>Phone:</b> ${phone || "N/A"}
📧 <b>Email:</b> ${email}
🛠 <b>Service:</b> ${service || "N/A"}
📍 <b>Zip:</b> ${zip || "N/A"}
📌 <b>Source:</b> ${source}
    `;

        // Tracking Info Section
        const hasTracking =
            gclid ||
            yclid ||
            utm_source ||
            utm_medium ||
            utm_campaign ||
            ga_client_id ||
            ym_client_id;

        if (hasTracking) {
            message += `
📊 <b>Tracking Info:</b>
${gclid ? `🔹 GCLID: ${gclid}` : ""}
${yclid ? `🔸 YCLID: ${yclid}` : ""}
${utm_source ? `📢 Source: ${utm_source}` : ""}
${utm_medium ? `📢 Medium: ${utm_medium}` : ""}
${utm_campaign ? `📢 Campaign: ${utm_campaign}` : ""}
${utm_term ? `📢 Term: ${utm_term}` : ""}
${utm_content ? `📢 Content: ${utm_content}` : ""}
${ga_client_id ? `📈 GA Client ID: ${ga_client_id}` : ""}
${ym_client_id ? `📈 YM Client ID: ${ym_client_id}` : ""}
      `;
        }

        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML",
            }),
        });

        if (response.ok) {
            return new Response(
                JSON.stringify({
                    message: "Success",
                    lead_id: lead.id,
                }),
                { status: 200 },
            );
        } else {
            return new Response(
                JSON.stringify({
                    message: "Telegram API Error (lead still saved)",
                    lead_id: lead.id,
                }),
                { status: 200 }, // Still 200 because lead was saved
            );
        }
    } catch (error) {
        console.error("Error in telegram-webhook:", error);
        return new Response(
            JSON.stringify({
                message: "Server Error",
            }),
            { status: 500 },
        );
    }
};
