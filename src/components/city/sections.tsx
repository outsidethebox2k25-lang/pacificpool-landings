'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Award,
  Check,
  ChevronDown,
  Clock,
  Droplet,
  Languages,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Sun,
  ThermometerSun,
  Wrench,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/shared/button';
import { Reveal, Stagger, StaggerItem, fadeUp } from '@/components/shared/reveal';
import {
  PHONE_AI,
  PHONE_EN,
  PHONE_ES,
  formatPhone,
  shimmer,
  telLink,
  whatsappLink,
} from '@/lib/cn';
import type { CityDict } from './dictionary';
import type { CityConfig } from '@/lib/cities';

// ───────────────────────────────────────────────── HERO
export function Hero({
  dict,
  city,
  lang,
}: {
  dict: CityDict;
  city: CityConfig;
  lang: 'en' | 'es';
}) {
  const phone = PHONE_AI;
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-pool-ink text-white lg:min-h-[92svh]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={city.heroPhoto}
          alt={`Sparkling pool in ${city.name}, ${city.state}`}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={shimmer(2400, 1600)}
          className="object-cover editorial-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-pool-ink/90" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/55 via-black/20 to-transparent lg:w-3/5" />
      </div>

      <div className="mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-12 sm:pb-20 lg:min-h-[92svh] lg:px-8 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-full border border-pool-sun bg-pool-sun/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-editorial text-white backdrop-blur sm:text-[11px]"
          >
            <MapPin className="h-3 w-3 text-pool-sun" />
            {dict.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display mt-5 text-balance text-4xl font-bold leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            {dict.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 max-w-2xl text-balance text-base text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:mt-7 sm:text-lg"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <Button href="#form" variant="primary" size="lg">
              {dict.hero.ctaPrimary}
            </Button>
            <a
              href={telLink(phone)}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white hover:text-pool-ink"
            >
              <Phone className="h-4 w-4" />
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-editorial text-white/95 backdrop-blur-sm sm:mt-10 sm:gap-x-5 sm:px-5 sm:py-2.5 sm:text-[11px]"
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-pool-sun text-pool-sun" strokeWidth={0} />
              {dict.hero.trust.rating}
            </span>
            <span className="h-3 w-px bg-white/30" />
            <span>{dict.hero.trust.years}</span>
            <span className="hidden h-3 w-px bg-white/30 sm:inline-block" />
            <span>{dict.hero.trust.licensed}</span>
            <span className="hidden h-3 w-px bg-white/30 sm:inline-block" />
            <span>{dict.hero.trust.bilingual}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── PAIN
export function Pain({ dict }: { dict: CityDict }) {
  return (
    <section className="bg-pool-sand px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-editorial text-pool-sun-dark">
            <AlertTriangle className="h-3.5 w-3.5" />
            {dict.pain.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold text-pool-ink sm:text-4xl lg:text-5xl">
            {dict.pain.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base text-pool-stone sm:text-lg">{dict.pain.intro}</p>
        </Reveal>

        <Stagger delay={0.1} className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2">
          {dict.pain.items.map((item) => (
            <StaggerItem
              key={item.title}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-pool-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-pool-sun/15 text-pool-sun-dark">
                <AlertTriangle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-pool-ink sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-pool-stone">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── WHY
const whyIcons = [MapPin, Sparkles, Languages, Clock];

export function Why({ dict }: { dict: CityDict }) {
  return (
    <section id="services" className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-editorial text-pool-sun-dark">{dict.why.eyebrow}</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-pool-ink sm:text-4xl lg:text-5xl">
            {dict.why.title}
          </h2>
          <p className="mt-5 text-base text-pool-stone sm:text-lg">{dict.why.intro}</p>
        </Reveal>

        <Stagger delay={0.1} className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length];
            return (
              <StaggerItem
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-pool-line bg-pool-sand p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-pool text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-pool-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pool-stone">{item.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── SERVICES
const servicesIcons = [Droplet, Wrench, Sparkles, Sun, ThermometerSun, Award];

export function Services({ dict }: { dict: CityDict }) {
  return (
    <section className="bg-pool-sand px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-editorial text-pool-sun-dark">{dict.services.eyebrow}</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-pool-ink sm:text-4xl lg:text-5xl">
            {dict.services.title}
          </h2>
        </Reveal>

        <Stagger delay={0.08} className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item, i) => {
            const Icon = servicesIcons[i % servicesIcons.length];
            return (
              <StaggerItem
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl border border-pool-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-pool text-white shadow-md transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-pool-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pool-stone">{item.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── PROOF
export function Proof({ dict }: { dict: CityDict }) {
  return (
    <section id="reviews" className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-editorial text-pool-sun-dark">
            <Star className="h-3.5 w-3.5" />
            {dict.proof.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-pool-ink sm:text-4xl lg:text-5xl">
            {dict.proof.title}
          </h2>
        </Reveal>
        <Stagger delay={0.1} className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3">
          {dict.proof.items.map((t) => (
            <StaggerItem
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-pool-line bg-pool-sand p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-pool-sun text-pool-sun" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-pool-ink sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-pool-line pt-4">
                <p className="font-bold text-pool-ink">{t.name}</p>
                <p className="text-xs text-pool-stone">{t.city}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-pool-success/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-editorial text-pool-success">
                  <Check className="h-3 w-3" strokeWidth={3} />
                  {t.outcome}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── PROCESS
export function Process({ dict }: { dict: CityDict }) {
  return (
    <section className="bg-pool-sand px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-editorial text-pool-sun-dark">{dict.process.eyebrow}</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-pool-ink sm:text-4xl lg:text-5xl">
            {dict.process.title}
          </h2>
        </Reveal>
        <Stagger delay={0.12} className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, i) => (
            <StaggerItem
              key={step.title}
              variants={fadeUp}
              className="relative rounded-2xl border border-pool-line bg-white p-6 shadow-sm"
            >
              <span className="font-display text-4xl font-bold text-pool-sun opacity-30">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="font-display mt-3 text-lg font-bold text-pool-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-pool-stone">{step.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── FAQ
export function FAQs({ dict }: { dict: CityDict }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[10px] font-bold uppercase tracking-editorial text-pool-sun-dark">{dict.faqs.eyebrow}</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-pool-ink sm:text-4xl lg:text-5xl">
            {dict.faqs.title}
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-pool-line rounded-2xl border border-pool-line bg-pool-sand sm:mt-12">
          {dict.faqs.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:text-pool-blue sm:px-6"
                >
                  <span className="font-display text-base font-bold text-pool-ink sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-pool-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="text-sm leading-relaxed text-pool-stone sm:text-base">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── URGENCY
export function Urgency({ dict, lang }: { dict: CityDict; lang: 'en' | 'es' }) {
  const phone = PHONE_AI;
  return (
    <section className="relative overflow-hidden bg-gradient-sun px-5 py-16 text-pool-ink sm:py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-pool-ink/30 bg-pool-ink/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-editorial text-pool-ink backdrop-blur sm:text-[11px]">
            <Sun className="h-3 w-3" />
            {dict.urgency.eyebrow}
          </p>
          <h2 className="font-display mt-6 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            {dict.urgency.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg">{dict.urgency.body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-full bg-pool-ink px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_-6px_rgba(0,0,0,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.5)]"
            >
              {dict.urgency.ctaPrimary}
            </a>
            <a
              href={telLink(phone)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-pool-ink/40 bg-white/30 px-7 py-3.5 text-base font-bold text-pool-ink backdrop-blur transition-colors hover:bg-pool-ink hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {dict.urgency.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── FINAL CTA
export function FinalCta({
  dict,
  message,
  lang,
}: {
  dict: CityDict;
  message: string;
  lang: 'en' | 'es';
}) {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-gradient-ink px-5 py-16 text-white sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-pool-sun bg-pool-sun/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-editorial text-white backdrop-blur sm:text-[11px]">
            <Shield className="h-3 w-3 text-pool-sun" />
            {dict.finalCta.eyebrow}
          </span>
          <h2 className="font-display mt-6 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            {dict.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg">{dict.finalCta.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#form" variant="primary" size="lg">
              {dict.finalCta.primary}
            </Button>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white hover:text-pool-ink"
            >
              {dict.finalCta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────── PHONE STRIP (AI agent 24/7)
export function PhoneStrip({ lang }: { lang: 'en' | 'es' }) {
  const phone = PHONE_AI;
  const copy =
    lang === 'es'
      ? {
          badge: 'Agente IA · 24/7 · Bilingüe',
          headline: 'Llama y habla con nuestro agente IA. Bilingüe. Nunca duerme.',
          sub: 'Resuelve dudas, agenda tu cotización, te conecta con humano si lo necesitas. Nunca perdemos una llamada.',
          cta: 'Llama ahora',
        }
      : {
          badge: 'AI Agent · 24/7 · Bilingual',
          headline: 'Call our AI agent. Bilingual. Never sleeps.',
          sub: 'Answers questions, books your free estimate, hands off to a human if needed. We never miss a lead.',
          cta: 'Call now',
        };
  return (
    <section className="relative overflow-hidden bg-gradient-pool px-5 py-12 text-white sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-editorial text-white backdrop-blur sm:text-[11px]">
            <Sparkles className="h-3 w-3" />
            {copy.badge}
          </p>
          <p className="font-display mt-3 text-2xl font-bold leading-tight sm:text-3xl">{copy.headline}</p>
          <p className="mt-2 text-sm text-white/85 sm:text-base">{copy.sub}</p>
        </div>
        <a
          href={telLink(phone)}
          className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-bold text-pool-ink shadow-[0_8px_22px_-6px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02]"
        >
          <Phone className="h-5 w-5 text-pool-blue" />
          {formatPhone(phone)}
        </a>
      </div>
    </section>
  );
}
