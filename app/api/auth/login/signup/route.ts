import { NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/store";
import { makeSessionValue, SESSION_COOKIE } from "@/lib/cookies";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const email = body?.email?.trim();
  const password = body?.password;
  const confirmPassword = body?.confirmPassword;

  if (!email || !password || !confirmPassword) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { message: "Password must be at least 8 characters." },
      { status: 400 }
    );
  }

  if (password !== confirmPassword) {
    return NextResponse.json(
      { message: "Passwords do not match." },
      { status: 400 }
    );
  }

  if (findUserByEmail(email)) {
    return NextResponse.json(
      { message: "Email already registered." },
      { status: 409 }
    );
  }

  const user = createUser(email, password);

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
