import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

// Authenticating your Liveblocks application
// https://liveblocks.io/docs/rooms/authentication/access-token-permissions/nextjs

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

const liveblocks = new Liveblocks({
  secret: API_KEY!,
});

export async function POST(request: NextRequest) {
  // Get the current user's unique id from your database
  const userId = Math.floor(Math.random() * 10000);

  // Create a session for the current user
  // userInfo is made available in Liveblocks presence hooks, e.g. useOthers
  const session = liveblocks.prepareSession(`user-${userId}`, {
    userInfo: USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length],
  });

  // Give the user access to the room
  const { room } = await request.json();
  session.allow(room, session.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}

const USER_INFO = [
  {
    name: "Chris",
    color: "#3b82f6",
  },
  {
    name: "Rachel",
    color: "#a855f7",
  },
  {
    name: "Adam",
    color: "#10b981",
  },
  {
    name: "Tatum",
    color: "#ef4444",
  },
  {
    name: "Anjali Wanda",
    color: "#f59e0b",
  },
  {
    name: "Jody",
    color: "#ec4899",
  },
  {
    name: "Emil",
    color: "#06b6d4",
  },
  {
    name: "Jory",
    color: "#14b8a6",
  },
  {
    name: "Quinn",
    color: "#f43f5e",
  },
];
