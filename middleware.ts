import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware 호출됨, 경로:", request.nextUrl.pathname);
  return NextResponse.next();
}
