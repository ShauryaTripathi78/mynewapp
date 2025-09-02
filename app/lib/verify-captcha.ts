// app/api/verify-captcha/route.ts (for Next.js 13+ with App Router)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;


  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();
  

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
