import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

const schema = z.object({ title: z.string().trim().min(1).max(120) });

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const broadcasts = await prisma.broadcast.findMany({ where: { userId: session.id }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ broadcasts });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "A broadcast title is required." }, { status: 400 });
  const broadcast = await prisma.broadcast.create({ data: { title: parsed.data.title, userId: session.id } });
  return NextResponse.json({ broadcast }, { status: 201 });
}
