'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Learn', href: '#' },
  { label: 'Fraud', href: '#' },
  { label: 'Live', href: '#' },
  { label: 'Compare', href: '#' },
];

const reviewButton = {
  label: 'LIVING REVIEW v1.0',
  href: '#',
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between py-2">
          <div className="flex min-w-0 items-center gap-4 lg:gap-7">
            <a href="#" className="shrink-0 text-[30px] font-bold tracking-[-1.5px] text-navy sm:text-[34px]">
              RMSSD.COM
            </a>

            <div className="hidden min-w-0 items-center gap-2 text-muted md:flex lg:gap-3">
              <span className="text-lg">/</span>

              <span className="truncate text-[15px] font-medium lg:text-[17px]">The Database of True RMSSD</span>
            </div>
          </div>

          <nav className="hidden items-center gap-7.5 text-[16px] font-medium text-muted lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-blue">
                {item.label}
              </a>
            ))}

            <a
              href={reviewButton.href}
              className="flex h-7.5 items-center rounded-lg bg-blue px-3 text-sm font-bold text-white/90 shadow-sm"
            >
              <span>{reviewButton.label}</span>
              <span className="ml-1 inline-block h-2 w-2 -translate-y-1 rounded-full bg-green" />
            </a>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-navy lg:hidden"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-slate-200 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-[17px] font-semibold text-muted">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="py-1 transition hover:text-blue" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}

              <a
                href={reviewButton.href}
                className="mt-1 flex h-8 w-fit items-center rounded-lg bg-blue px-3 text-sm font-bold text-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{reviewButton.label}</span>
                <span className="ml-1 inline-block h-2 w-2 -translate-y-1 rounded-full bg-green" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
