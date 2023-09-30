import { Room } from "@/app/Room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";
import { Avatars } from "@/components/Avatars";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DxGuzBsA7pO
 */
export default function Home() {
  return (
    <Room>
      <div className="w-screen h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 flex items-center justify-center">
        <div className="bg-[#000000] rounded-lg p-4 h-[270px] w-[600px] mx-auto my-auto shadow-2xl">
          <div className="flex items-center justify-between text-[#808080]">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#FF2D55]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C941]" />
            </div>
            <span className="text-[#808080] text-sm font-sans">index.tsx</span>
            <Avatars />
          </div>
          <div className="mt-6 leading-snug font-mono flex">
            <CollaborativeEditor />
          </div>
        </div>
      </div>
      )
    </Room>
  );
}
