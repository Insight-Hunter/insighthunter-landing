import { NextRequest } from 'next/server';
import webPush from 'web-push';

webPush.setVapidDetails(
  'mailto:admin@insighthunter.app',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: NextRequest) {
  const subscription = await req.json();
  // Save to DB (e.g., Prisma, Supabase)
  // await db.pushSubscription.create({ data: subscription });

  return Response.json({ success: true });
}
