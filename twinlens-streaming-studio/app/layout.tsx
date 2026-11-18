import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TwinLens Streaming Studio",
  description: "Two Minds, One Brand. A professional live streaming and production studio."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
