'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SiteHeader() {
  // Get current pathname to highlight active link
  const pathname = usePathname();

  // Navigation items with their paths and labels
  const navItems = [
    { path: '/', label: 'Client Demo' },
    { path: '/posts', label: 'Server Demo' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-all duration-200 hover:text-white hover:scale-105 ${
                pathname === item.path 
                  ? 'text-white' 
                  : 'text-gray-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
} 