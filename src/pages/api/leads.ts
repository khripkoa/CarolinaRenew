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
}

export const GET: APIRoute = async ({ request }) => {
    // Simple password protection via query param
    const url = new URL(request.url);
    const password = url.searchParams.get("password");
    const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

    if (password !== ADMIN_PASSWORD) {
        return new Response(
            JSON.stringify({ error: "Unauthorized" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    try {
        let leads: Lead[] = [];

        try {
            const store = getStore("leads");
            const existingData = await store.get("all-leads", { type: "json" });
            if (existingData && Array.isArray(existingData)) {
                leads = existingData as Lead[];
            }
        } catch (blobError) {
            // Netlify Blobs not available (local dev without netlify dev)
            leads = [];
        }

        return new Response(
            JSON.stringify({ leads, total: leads.length }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    } catch (error) {
        console.error("Error fetching leads:", error);
        return new Response(
            JSON.stringify({ error: "Server Error", leads: [] }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};

// Export leads as CSV
export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const password = data.password;
    const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

    if (password !== ADMIN_PASSWORD) {
        return new Response(
            JSON.stringify({ error: "Unauthorized" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    try {
        const store = getStore("leads");
        let leads: Lead[] = [];

        try {
            const existingData = await store.get("all-leads", { type: "json" });
            if (existingData && Array.isArray(existingData)) {
                leads = existingData as Lead[];
            }
        } catch {
            leads = [];
        }

        // Generate CSV
        const headers = ["ID", "Timestamp", "Source", "Name", "Phone", "Email", "Service", "Zip"];
        const csvRows = [headers.join(",")];

        for (const lead of leads) {
            const row = [
                lead.id,
                lead.timestamp,
                lead.source,
                `"${(lead.name || "").replace(/"/g, '""')}"`,
                lead.phone || "",
                lead.email,
                `"${(lead.service || "").replace(/"/g, '""')}"`,
                lead.zip || "",
            ];
            csvRows.push(row.join(","));
        }

        const csv = csvRows.join("\n");

        return new Response(csv, {
            status: 200,
            headers: {
                "Content-Type": "text/csv",
                "Content-Disposition": `attachment; filename="leads_${new Date().toISOString().split("T")[0]}.csv"`,
            },
        });
    } catch (error) {
        console.error("Error exporting leads:", error);
        return new Response(
            JSON.stringify({ error: "Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
