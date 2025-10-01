
import "./globals.css";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights you need
  variable: "--font-space-grotesk", // optional for CSS variable
});

export const metadata = {
  title: "Sumanayak",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`spaceGrotesk.variable antialiased leading-8 overflow-x-hidden dark:bg-[var(--dark-theme)] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
