import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw17CgqSPb9UxNdVTAptW9CDK2C-dvcquUYddhmmSvUDLbvMqnyRK-sMt-EvWV0IIEc/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, website, phone, problem, language } = body;

    if (!name || !email || !phone || !problem) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const payload = {
      fullName: name,
      email,
      website: website || "",
      phone,
      problem,
      language: language ?? "en",
      submittedAt: new Date().toISOString(),
    };

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to send to Google Sheets." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
