import { Room } from "@/app/Room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";
import { Avatars } from "@/components/Avatars";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DxGuzBsA7pO
 */
export default function Home() {
  return (
    <main>
      <Room>
        <div className="w-screen h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 flex items-center justify-center">
          <div className="bg-[#000000] rounded-lg p-4 h-[300px] w-[600px] mx-auto my-auto shadow-2xl">
            <div className="flex items-center justify-between text-[#808080]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF2D55]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C941]" />
              </div>
              <span className="text-[#808080] text-sm font-sans">
                index.tsx
              </span>
              <Avatars />
            </div>
            <div className="mt-6 leading-snug font-mono flex">
              <CollaborativeEditor />
              {/*<div className="pr-4 text-right text-[#808080]">*/}
              {/*  <p className="my-1">1</p>*/}
              {/*  <p className="my-1">2</p>*/}
              {/*  <p className="my-1">3</p>*/}
              {/*  <p className="my-1">4</p>*/}
              {/*  <p className="my-1">5</p>*/}
              {/*  <p className="my-1">6</p>*/}
              {/*  <p className="my-1">7</p>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  <p className="my-1 text-blue-300">{`function HelloWorld() {`}</p>*/}
              {/*  <p className="my-1 pl-[20px] text-green-500">return (</p>*/}
              {/*  <p className="my-1 pl-[40px] text-purple-300">{`<div>`}</p>*/}
              {/*  <p className="my-1 pl-[60px] text-[#7FFFD4]">{`<h1>Hello, world!</h1>;`}</p>*/}
              {/*  <p className="my-1 pl-[40px] text-purple-300">{`</div>`}</p>*/}
              {/*  <p className="my-1 pl-[20px] text-green-500">)</p>*/}
              {/*  <p className="my-1 text-blue-300">{`}`}</p>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        )
      </Room>
    </main>
  );
}
