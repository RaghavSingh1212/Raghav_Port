import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        {/* Force Tailwind to generate custom background/border classes in production */}
        <div className="hidden bg-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.10)] border-[rgba(255,255,255,0.20)]"></div>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
