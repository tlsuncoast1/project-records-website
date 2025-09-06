import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Project Records LLC",
  description: "Neon-clean studio: music, podcasts, mastering.",
  keywords: ["Project Records", "recording", "mixing", "mastering", "podcast production"],
  robots: "index,follow",
  openGraph: {
    title: "Project Records LLC",
    description: "Neon-clean studio: music, podcasts, mastering.",
    type: "website"
  },
  themeColor: "#0b0f13"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

