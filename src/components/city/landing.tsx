import { Nav } from '@/components/shared/nav';
import { Footer } from '@/components/shared/footer';
import { WhatsAppFloat } from '@/components/shared/whatsapp-float';
import { CTAForm } from '@/components/shared/cta-form';
import { Reveal } from '@/components/shared/reveal';
import {
  Hero,
  Pain,
  Why,
  Services,
  Proof,
  Process,
  FAQs,
  Urgency,
  FinalCta,
  PhoneStrip,
} from './sections';
import { dictFor } from './dictionary';
import type { CityConfig } from '@/lib/cities';

type Props = {
  city: CityConfig;
  lang: 'en' | 'es';
};

export function CityLanding({ city, lang }: Props) {
  const dict = dictFor(city, lang);
  const webhook = process.env.NEXT_PUBLIC_GHL_WEBHOOK;
  const whatsappMsg =
    lang === 'es'
      ? `Hola, vi su landing de ${city.name} y quiero una cotización gratis para mi alberca.`
      : `Hi, I saw your ${city.name} landing and I'd like a free pool quote.`;

  return (
    <>
      <Nav lang={lang} labels={dict.nav} />
      <Hero dict={dict} city={city} lang={lang} />
      <Pain dict={dict} />
      <Why dict={dict} />
      <Services dict={dict} />
      <PhoneStrip lang={lang} />
      <Proof dict={dict} />
      <Process dict={dict} />
      <FAQs dict={dict} />
      <Urgency dict={dict} lang={lang} />

      <section className="bg-pool-sand px-5 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <CTAForm
              dict={dict.form}
              city={city.name}
              citySlug={city.slug}
              lang={lang}
              webhookUrl={webhook}
              defaultZip={city.zipDefault}
            />
          </Reveal>
        </div>
      </section>

      <FinalCta dict={dict} message={whatsappMsg} lang={lang} />
      <Footer lang={lang} city={city.fullName} />
      <WhatsAppFloat message={whatsappMsg} />
    </>
  );
}
