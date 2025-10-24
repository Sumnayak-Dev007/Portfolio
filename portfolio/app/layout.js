
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
  icons: {
    icon: "/favicon.ico",       // standard favicon
    shortcut: "/favicon.ico",   // for older browsers
    apple: "/favicon.ico",      // iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`spaceGrotesk.variable antialiased leading-8 overflow-x-hidden bg-[var(--dark-theme)] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
