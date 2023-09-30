"use client";

import { useOthers, useSelf } from "@/liveblocks.config";

export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div className="flex items-center gap-2">
      {users.map(({ connectionId, info }) => {
        return <Avatar key={connectionId} color={info.color} />;
      })}

      {currentUser && <Avatar color={currentUser.info.color} />}
    </div>
  );
}

export function Avatar({ color }: { color: string }) {
  return (
    <svg
      style={{ color }}
      className=" h-5 w-5"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
