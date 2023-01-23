import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

const url = "http://localhost:3000/api/log";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const func = async () => {
    const data = {
      date: new Date().toISOString(),
      path: request.nextUrl.pathname,
      ip: request.ip,
    };
    const opts = {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    } as RequestInit;
    fetch(url, opts);
  };
  event.waitUntil(func());
  const response = NextResponse.next();
  return response;
}
