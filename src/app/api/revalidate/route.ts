import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const secret = `Bearer ${process.env.NEXT_REVALIDATE_TOKEN}`;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const authorization = request.headers.get("authorization");

  if (authorization !== secret) {
    return new Response("Unauthorized", { status: 403 });
  }

  const path = searchParams.get("path");

  if (path) {
    revalidatePath(path);
    revalidatePath("/(website)/", "page");
    revalidatePath("/(website)/archive", "page");
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate"
  });
}
