import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CityLanding } from '@/components/city/landing';
import { dictFor } from '@/components/city/dictionary';
import { cities } from '@/lib/cities';

const locales = ['en', 'es'] as const;
const hasLocale = (l: string): l is (typeof locales)[number] =>
  (locales as readonly string[]).includes(l);

export async function generateMetadata({ params }: PageProps<'/[lang]/kingman'>): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = dictFor(cities['kingman'], lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://pacificpool-landings.vercel.app/${lang}/kingman`,
      languages: { en: '/en/kingman', es: '/es/kingman' },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === 'es' ? 'es_US' : 'en_US',
      type: 'website',
      siteName: 'Pacific Pool Plastering & Repair',
    },
  };
}

export default async function KingmanPage({ params }: PageProps<'/[lang]/kingman'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CityLanding city={cities['kingman']} lang={lang} />;
}
