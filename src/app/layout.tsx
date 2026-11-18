import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteNavigation } from "@/components/SiteNavigation";
import { agency, sitePath } from "@/config/agency";
import "./globals.css";

const socialCardUrl = new URL("images/outline-social-card.jpg", agency.websiteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(agency.websiteUrl),
  title: {
    default: agency.name + " — Digital design & development",
    template: "%s | " + agency.name,
  },
  description: agency.description,
  alternates: { canonical: "/" },
  icons: { icon: sitePath("/icon.svg") },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: agency.name,
    title: agency.name + " — Digital design & development",
    description: agency.description,
    images: [{ url: socialCardUrl, width: 1200, height: 630, alt: "Outline. digital studio wordmark on a charcoal background" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNavigation />
        {children}
      </body>
    </html>
  );
}
