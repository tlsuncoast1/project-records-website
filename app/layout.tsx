import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Records LLC",
  description: "Neon-clean studio: music, podcasts, mastering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
