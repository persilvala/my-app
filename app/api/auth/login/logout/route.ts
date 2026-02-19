import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/cookies";

export async function POST(req: Request) {
  const url = new URL("/login", req.url);
  const res = NextResponse.redirect(url);

  res.cookies.set({
    name: SESSION_COOKIE,
    value: "",
    path: "/",
    maxAge: 0,
  });

  return res;
}
