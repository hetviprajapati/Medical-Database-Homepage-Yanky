'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 xl:px-0">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-7">
            <a href="#" className="text-[30px] font-bold tracking-[-1.5px] text-navy sm:text-[34px]">
              RMSSD.COM
            </a>

            <div className="hidden items-center gap-3 text-[20px] text-muted lg:flex">
              <span>/</span>
              <span className="text-[17px] font-medium text-muted">The Database of True RMSSD</span>
            </div>
          </div>

          <nav className="hidden items-center gap-7.5 text-[16px] font-medium text-muted lg:flex">
            <a href="#" className="transition hover:text-blue">
              Learn
            </a>

            <a href="#" className="transition hover:text-blue">
              Fraud
            </a>

            <a href="#" className="transition hover:text-blue">
              Live
            </a>

            <a href="#" className="transition hover:text-blue">
              Compare
            </a>

            <a href="#" className="flex h-7.5 items-center rounded-lg bg-blue px-3 text-sm font-bold text-white/90 shadow-sm">
              <span>LIVING REVIEW v1.0</span>

              <span className="ml-1 inline-block h-2 w-2 -translate-y-1 rounded-full bg-green" />
            </a>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-3xl text-navy lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-slate-200 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-[17px] font-semibold text-muted">
              <a href="#" className="py-1 transition hover:text-blue" onClick={() => setIsMenuOpen(false)}>
                Learn
              </a>

              <a href="#" className="py-1 transition hover:text-blue" onClick={() => setIsMenuOpen(false)}>
                Fraud
              </a>

              <a href="#" className="py-1 transition hover:text-blue" onClick={() => setIsMenuOpen(false)}>
                Live
              </a>

              <a href="#" className="py-1 transition hover:text-blue" onClick={() => setIsMenuOpen(false)}>
                Compare
              </a>

              <a
                href="#"
                className="mt-1 flex h-8 w-fit items-center rounded-lg bg-blue px-3 text-sm font-bold text-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>LIVING REVIEW v1.0</span>

                <span className="ml-1 inline-block h-2 w-2 -translate-y-1 rounded-full bg-green" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
