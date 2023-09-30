import "../globals.css";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";

export const metadata = {
  title: "Liveblocks",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://liveblocks.io/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="https://liveblocks.io/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </head>
      <body
        className={inter.className}
        style={{ "--font-sans": inter.style.fontFamily } as CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
