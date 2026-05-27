import Link from 'next/link';
import { Clock, Mail, MapPin, Phone, Sparkles, Waves } from 'lucide-react';
import { template, telLink, PHONE_AI, PHONE_EN, PHONE_ES, formatPhone } from '@/lib/cn';

type Props = {
  lang: 'en' | 'es';
  city: string;
};

export function Footer({ lang, city }: Props) {
  const year = new Date().getFullYear();
  const t = lang === 'es' ? esCopy : enCopy;

  return (
    <footer className="border-t border-pool-line bg-gradient-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-pool shadow-lg">
                <Waves className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold leading-tight">
                Pacific Pool
                <span className="block text-[10px] font-normal uppercase tracking-editorial text-pool-cyan">
                  Plastering &amp; Repair
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/75">{t.tagline}</p>
          </div>

          <FooterCol icon={<MapPin className="h-3.5 w-3.5 text-pool-sun" />} label={t.area}>
            <p className="text-sm text-white/90">{t.areaList(city)}</p>
          </FooterCol>

          <FooterCol icon={<Clock className="h-3.5 w-3.5 text-pool-sun" />} label={t.hours}>
            <p className="text-sm text-white/90">{t.hoursValue}</p>
          </FooterCol>

          <FooterCol icon={<Phone className="h-3.5 w-3.5 text-pool-sun" />} label={t.phone}>
            <a
              href={telLink(PHONE_AI)}
              className="inline-flex items-center gap-2 rounded-full bg-pool-sun/15 px-3 py-1.5 text-sm font-bold transition-colors hover:bg-pool-sun/25"
            >
              <Sparkles className="h-3 w-3 text-pool-sun" />
              {formatPhone(PHONE_AI)}
              <span className="font-normal text-white/85">· 24/7 AI</span>
            </a>
            <p className="mt-3 text-[10px] uppercase tracking-editorial text-white/55">
              {t.officeLines}
            </p>
            <a href={telLink(PHONE_EN)} className="mt-1 block text-xs font-bold transition-colors hover:text-pool-cyan">
              {formatPhone(PHONE_EN)} <span className="font-normal text-white/60">· EN</span>
            </a>
            <a href={telLink(PHONE_ES)} className="mt-0.5 block text-xs font-bold transition-colors hover:text-pool-cyan">
              {formatPhone(PHONE_ES)} <span className="font-normal text-white/60">· ES</span>
            </a>
            <p className="mt-3 text-[10px] uppercase tracking-editorial text-white/55">{t.email}</p>
            <a
              href="mailto:pacificpoolplasteringandrepair@gmail.com"
              className="mt-1 block text-xs text-white/90 transition-colors hover:text-pool-cyan"
            >
              <Mail className="mr-1 inline h-3 w-3 text-pool-sun" />
              pacificpoolplasteringandrepair@gmail.com
            </a>
          </FooterCol>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-[11px] uppercase tracking-editorial text-white/60 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>{template(t.rights, { year })}</p>
          <p className="mt-2 sm:mt-0">{t.licensed}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-editorial text-white/70">
        {icon}
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

const enCopy = {
  tagline:
    '"Quality Repairs, Sparkling Pools." Bringing pools back to life across Mohave County for 27 years.',
  area: 'Service Area',
  areaList: (city: string) => `Currently in: ${city}\nAlso serving Bullhead City, Kingman, Lake Havasu City.`,
  hours: 'Hours',
  hoursValue: 'Mon–Fri 8 AM – 5 PM · AI agent answers 24/7',
  phone: 'Call us',
  officeLines: 'Office Lines',
  email: 'Email',
  rights: '© {year} Pacific Pool Plastering & Repair LLC.',
  licensed: 'Licensed · Insured · Free Estimates',
};

const esCopy = {
  tagline:
    '"Quality Repairs, Sparkling Pools." Revivimos albercas en Mohave County desde hace 27 años.',
  area: 'Zona de Servicio',
  areaList: (city: string) => `Actualmente en: ${city}\nTambién Bullhead City, Kingman, Lake Havasu City.`,
  hours: 'Horario',
  hoursValue: 'Lun–Vie 8 AM – 5 PM · Agente IA contesta 24/7',
  phone: 'Llámanos',
  officeLines: 'Líneas de Oficina',
  email: 'Correo',
  rights: '© {year} Pacific Pool Plastering & Repair LLC.',
  licensed: 'Licencia · Asegurados · Cotización Gratis',
};
