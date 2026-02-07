import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { BookOpen, Wrench, Database, Gamepad2 } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JackerLab Docs",
  description: "JackerLab 서비스 문서",
};

const navigation = [
  {
    title: "시작하기",
    items: [
      { name: "소개", href: "/" },
    ],
  },
  {
    title: "서비스",
    items: [
      { name: "Tools", href: "/services/tools", icon: Wrench, color: "text-blue-500" },
      { name: "Data", href: "/services/data", icon: Database, color: "text-green-500" },
      { name: "Games", href: "/services/games", icon: Gamepad2, color: "text-purple-500" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 h-14 border-b border-gray-200 bg-white/80 backdrop-blur-sm z-50">
            <div className="flex items-center h-full px-6">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen size={18} className="text-white" />
                </div>
                <span className="font-semibold text-gray-900">Docs</span>
              </Link>
            </div>
          </header>

          <div className="flex pt-14">
            {/* Sidebar */}
            <aside className="fixed left-0 top-14 bottom-0 w-64 border-r border-gray-200 bg-gray-50/50 overflow-y-auto">
              <nav className="p-4 space-y-6">
                {navigation.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = 'icon' in item ? item.icon : null;
                        const color = 'color' in item ? item.color : '';
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors group"
                            >
                              {Icon && <Icon size={16} className={color} />}
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64">
              <div className="max-w-5xl mx-auto px-12 py-12">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
