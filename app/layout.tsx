import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AdSenseScript, AdBannerBottom } from "@/components/ads";
import { GoogleAnalytics, SiteVerification } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Docs - JackerLab 문서",
    template: "%s | JackerLab Docs",
  },
  description: "JackerLab 서비스 문서 및 가이드",
  keywords: ["문서", "가이드", "JackerLab", "도움말"],
  authors: [{ name: "JackerLab" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "JackerLab Docs",
    title: "Docs - JackerLab 문서",
    description: "JackerLab 서비스 문서 및 가이드",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docs - JackerLab 문서",
    description: "JackerLab 서비스 문서 및 가이드",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
        <AdSenseScript />
        <SiteVerification />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 min-w-0 w-0 p-6 lg:p-8 pt-20 lg:pt-8 bg-gray-50 overflow-hidden">
            <div className="max-w-full">
              {children}
            </div>
          </main>
        </div>
        <div className="bg-gray-50 pl-0 lg:pl-64 overflow-hidden" style={{ contain: 'layout inline-size' }}>
          <div className="px-6 lg:px-8 pb-4">
            <AdBannerBottom slot="9727264203" />
          </div>
        </div>
      </body>
    </html>
  );
}
