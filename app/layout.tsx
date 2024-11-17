import type { Metadata } from "next";
import "./globals.css";

import {Poppins} from "next/font/google"

export const metadata: Metadata = {
  title: "Advanced State Management",
  description: "state management",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
