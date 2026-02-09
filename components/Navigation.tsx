'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, BookOpen, Home, Server } from 'lucide-react';

const menuItems = [
  { name: '소개', href: '/', icon: Home },
  { name: '서비스', href: '/services', icon: Server },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center px-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link href="/" className="flex items-center gap-2 ml-2">
          <BookOpen className="text-blue-600" size={24} />
          <span className="text-lg font-bold">Docs</span>
        </Link>
      </header>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-14 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky left-0 bg-white z-40
          border-r border-gray-200 overflow-y-auto
          transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-64 top-14 lg:top-0 h-[calc(100vh-3.5rem)] lg:h-screen
        `}
      >
        {/* Desktop Logo */}
        <div className="hidden lg:block p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="text-blue-600" size={28} />
            <span className="text-xl font-bold text-gray-900">Docs</span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg
                      transition-colors duration-150
                      ${isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
