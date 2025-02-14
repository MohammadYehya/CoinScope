import { sendMessage } from "@/lib/producer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { topic, message } = await req.json();
    await sendMessage(topic, message);
    return NextResponse.json({ msg: 'Success' }, { status: 200 });
}