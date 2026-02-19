import { NextResponse } from "next/server";
import { validateUser } from "@/lib/auth";
import { makeSessionValue, SESSION_COOKIE } from "@/lib/cookies";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const email = body?.email?.trim();
  const password = body?.password;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  const user = validateUser(email, password);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: SESSION_COOKIE,
    value: makeSessionValue(user.id),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}
