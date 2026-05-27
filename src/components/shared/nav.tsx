'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Phone, X, Waves } from 'lucide-react';
import { LangSwitcher } from './lang-switcher';
import { Button } from './button';
import { cn, telLink, PHONE_AI, formatPhone } from '@/lib/cn';

type Props = {
  lang: 'en' | 'es';
  labels: {
    services: string;
    reviews: string;
    faq: string;
    contact: string;
    cta: string;
  };
};

export function Nav({ lang, labels }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close on route change
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        solid
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent',
      )}
    >
      <div
        className={cn(
          'hidden border-b text-[11px] uppercase tracking-editorial transition-colors lg:block',
          solid ? 'border-pool-line text-pool-stone' : 'border-white/20 text-white/90',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <a href={telLink(PHONE_AI)} className={cn('inline-flex items-center gap-2 transition-colors', solid ? 'hover:text-pool-blue' : 'hover:text-white')}>
            <Phone className="h-3 w-3" />
            {formatPhone(PHONE_AI)} · 24/7 AI Bilingual
          </a>
          <span>27 years · Licensed & Insured · Free Estimates</span>
          <span>Mon–Fri 8 AM – 5 PM</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-2.5" aria-label="Pacific Pool Plastering & Repair">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pool text-white shadow-md sm:h-11 sm:w-11">
            <Waves className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className={cn('font-display text-base font-bold md:text-lg', solid ? 'text-pool-ink' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]')}>
              Pacific Pool
            </span>
            <span className={cn('text-[10px] font-bold uppercase tracking-editorial', solid ? 'text-pool-blue' : 'text-white/85')}>
              Plastering &amp; Repair
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {[
            { href: '#services', label: labels.services },
            { href: '#reviews', label: labels.reviews },
            { href: '#faq', label: labels.faq },
            { href: '#contact', label: labels.contact },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'link-underline text-[11px] font-bold uppercase tracking-editorial transition-colors',
                solid ? 'text-pool-ink/85 hover:text-pool-blue' : 'text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:text-white',
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher current={lang} tone={solid ? 'light' : 'dark'} />
          <Button href="#form" variant="primary" size="sm" className="hidden lg:inline-flex">
            {labels.cta}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors lg:hidden',
              solid ? 'border-pool-line bg-white text-pool-ink' : 'border-white/30 bg-black/25 text-white',
            )}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-pool-line bg-white px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {[
              { href: '#services', label: labels.services },
              { href: '#reviews', label: labels.reviews },
              { href: '#faq', label: labels.faq },
              { href: '#contact', label: labels.contact },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 text-xs font-bold uppercase tracking-editorial text-pool-ink hover:text-pool-blue"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Button href="#form" variant="primary" size="md" className="w-full">
                {labels.cta}
              </Button>
            </li>
            <li className="mt-3">
              <a href={telLink(PHONE_AI)} className="inline-flex items-center gap-2 text-sm font-bold text-pool-ink">
                <Phone className="h-4 w-4 text-pool-blue" />
                {formatPhone(PHONE_AI)}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
