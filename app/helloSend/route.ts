import type { NextRequest } from "next/server";

// GET /api/greet?name=Somchai
export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") ?? "ผู้มาเยือน";
  return Response.json({ message: `สวัสดี ${name}` });
}
