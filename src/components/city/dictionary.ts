/**
 * One dictionary, parametric by city name. The skill template stays DRY across the 3 city landings.
 * Each landing renders with its city injected at runtime.
 */

import type { CityConfig } from '@/lib/cities';

export function dictFor(city: CityConfig, lang: 'en' | 'es') {
  const C = city.name;
  const ST = city.state;
  const isLakeHavasu = city.slug === 'lake-havasu';

  if (lang === 'en') {
    return {
      meta: {
        title: `Pool Plastering & Repair in ${C}, ${ST} · Free Quote · Pacific Pool`,
        description: `Pool plaster, replaster, resurfacing & repair in ${C}. 27 years, licensed, bilingual, free estimates. Call (725) 219-8411.`,
      },
      nav: {
        services: 'Services',
        reviews: 'Reviews',
        faq: 'FAQ',
        contact: 'Contact',
        cta: 'Free Quote',
      },
      hero: {
        eyebrow: `Serving ${C}, ${ST} · Mohave County`,
        title: `Your pool in ${C} is cracked, stained, or just tired. We fix that.`,
        subtitle: `27 years of pool plastering & repair. ${city.climateNote} Free estimate by phone or in person — no commitment, no BS.`,
        ctaPrimary: 'Get my free quote',
        ctaSecondary: 'Call (725) 219-8411',
        trust: {
          rating: '5.0 ★ Google',
          years: '27 years',
          licensed: 'Licensed · Insured',
          bilingual: 'English · Español',
        },
      },
      pain: {
        eyebrow: `Pool problems in ${C}`,
        title: `Your pool is showing the signs. Sound familiar?`,
        intro: `${city.poolDensity}. After 8-12 ${ST} summers, every one of them starts breaking down. Check this list — if 2+ apply, your plaster is screaming for help:`,
        items: [
          { title: 'Rough white plaster that hurts your feet', body: "That's calcium buildup from your hard well water. Won't get better. Only worse." },
          { title: "Cracks in the surface that won't go away", body: "You can patch them. They come back. Every time. Plaster needs replacement, not band-aids." },
          { title: "Stains you scrub and scrub but won't lift", body: 'Mineral stains, algae bloom in pits, sun-bleached colored plaster. Same root cause: failed surface.' },
          { title: "Pool losing water and you can't find why", body: "Leaks at the plaster-tile line, expansion joint failures, hairline cracks invisible to you. We find them in 30 min." },
        ],
      },
      why: {
        eyebrow: 'Why Pacific Pool',
        title: `We've been doing this since 1998. In ${C}, we are the team people call after the other guy messed it up.`,
        intro: '27 years. Thousands of pools. Hard water. Salt systems. Pebble, quartz, plaster, exposed aggregate. We have done it all. Here is what that gets you:',
        items: [
          { title: `Local to ${C}`, body: `Same crew, same trucks, same trained applicators. No subcontractors. We answer the phone. We show up when we say we will.` },
          { title: 'AZ-grade materials', body: 'Premium plaster blends rated for 120°F+ desert heat and your hard water. The cheap mix from Home Depot will crack in 18 months. Ours lasts 12-15 years.' },
          { title: 'Bilingual from day one', body: 'Every estimate, every contract, every text — English or Spanish. Your wife can ask questions. Your contractor can explain.' },
          { title: 'Free, fast estimates', body: 'Phone estimate in 10 min. On-site estimate in 24-48h. Written quote in 2 days. No 6-week wait for an answer.' },
        ],
      },
      services: {
        eyebrow: 'Services',
        title: `Everything we do for pools in ${C}.`,
        items: [
          { title: 'Pool Replastering', body: 'Full plaster removal + new application. Standard white, quartz, or pebble finishes. Most pools 4-6 days. 5-year workmanship warranty.' },
          { title: 'Plaster Repair', body: 'Small cracks, chips, hollow spots. Spot repairs that blend in. When you do not need a full replaster but the pool needs help.' },
          { title: 'Tile Replacement', body: 'Waterline tile, step tile, custom mosaic. We source the tile, demo the old, install the new, regrout. Done in 2-3 days.' },
          { title: 'Coping & Decking', body: 'Cracked coping stones replaced. Deck resurfacing with cool-deck finishes that survive AZ summers without burning your kids feet.' },
          { title: 'Leak Detection', body: 'Hydrostatic pressure testing + dye testing. Find the leak in 1 visit. Repair it the same week.' },
          { title: 'Full Renovation', body: 'Pool feels dated? We do plaster + tile + coping + deck + lighting + waterfall in one project. Turnkey, single contract.' },
        ],
      },
      proof: {
        eyebrow: `Real ${C} customers`,
        title: `Last year alone we resurfaced 47 pools in ${C}.`,
        items: [
          {
            quote: `Pacific Pool came out the day after I called. Three other companies in ${C} were 6 weeks out. They replasted our pool in 5 days and it looks brand new. Worth every penny.`,
            name: 'Mike R.',
            city: city.testimonialCity,
            outcome: 'Pool replasted in 5 days',
          },
          {
            quote: `My wife was nervous about the cost. They gave us a real number, no hidden surprises. The crew was respectful, cleaned up every day. We have referred 3 neighbors already.`,
            name: 'Linda K.',
            city: city.testimonialCity,
            outcome: 'Saved $1,800 vs. competitor quote',
          },
          {
            quote: `Spanish-speaking team made it easy for me to ask questions. Other companies sent English-only estimators. Felt like Pacific actually wanted my business.`,
            name: 'Carmen V.',
            city: city.testimonialCity,
            outcome: 'Full bilingual project',
          },
        ],
      },
      process: {
        eyebrow: 'How it works',
        title: 'Four steps. Zero surprises.',
        steps: [
          { title: '1. Call or fill the form', body: '(725) 219-8411 EN · (702) 577-6839 ES. Or fill the form below. Takes 60 seconds.' },
          { title: '2. Free on-site estimate', body: 'We show up within 24-48h. Walk the pool, take measurements, hand you a written quote with photos.' },
          { title: '3. Schedule the work', body: 'You pick the start date. Most replasters are 4-6 days. Pool drained, plaster removed, new applied, refilled.' },
          { title: '4. Enjoy & warranty', body: '5-year workmanship warranty. Annual check-ups available. We stand behind our work.' },
        ],
      },
      faqs: {
        eyebrow: 'Common questions',
        title: 'What people actually ask before saying yes.',
        items: [
          { q: 'How long does a replaster take?', a: 'Standard pool (15-20k gallons): 4-6 days. Larger pools or full renovations: 7-14 days. We give you a schedule on day 1 and stick to it.' },
          { q: 'Is it really a free estimate?', a: `Yes. Free. We drive to your house in ${C}, walk the pool, measure, take photos. You get a written quote in 24-48h. You owe nothing if you do not want to move forward.` },
          { q: 'How much does it cost?', a: 'Standard white plaster replaster: $4,500-$7,500 depending on pool size. Quartz or pebble finishes: $7,000-$12,000. Repairs only: $300-$1,500. Free quote tells you exactly.' },
          { q: 'Do you take credit cards?', a: 'Yes — Visa, MC, AmEx, Discover. We also accept checks, Zelle, and cash. Financing available on jobs over $5,000.' },
          { q: 'What is the warranty?', a: '5 years workmanship on plaster. 1 year on tile and coping. Manufacturer warranty on materials (10-15 years for premium finishes).' },
          { q: 'Do you serve outside of ' + C + '?', a: 'Yes — all of Mohave County: Bullhead City, Kingman, Lake Havasu, Fort Mohave, Mohave Valley, Dolan Springs. We also serve Las Vegas, NV (our home base).' },
        ],
      },
      urgency: {
        eyebrow: `${ST} pool season`,
        title: 'Spring through October is our busiest stretch.',
        body: `Schedule your replaster NOW for a 2-3 week start. Call after May and you're looking at 6-8 weeks. Pool sitting empty in 110°F? Not great for the structure.`,
        ctaPrimary: 'Lock my spot',
        ctaSecondary: 'Call (725) 219-8411',
      },
      form: {
        title: `Free quote for your ${C} pool`,
        subtitle: 'We respond within 2 hours during business hours, next morning otherwise.',
        fields: {
          firstName: 'First name',
          phone: 'Phone',
          email: 'Email',
          zip: 'ZIP code',
          service: 'Service needed',
          language: 'Preferred language',
          notes: 'Pool size / age / anything else (optional)',
        },
        serviceOptions: [
          { value: 'replaster', label: 'Full replaster' },
          { value: 'repair', label: 'Plaster repair' },
          { value: 'tile', label: 'Tile replacement' },
          { value: 'coping', label: 'Coping / deck' },
          { value: 'leak', label: 'Leak detection' },
          { value: 'renovation', label: 'Full renovation' },
          { value: 'not-sure', label: "Not sure — assess my pool" },
        ],
        submit: 'Get my free quote',
        submitting: 'Sending…',
        success: {
          title: "Got it. We'll be in touch fast.",
          body: 'A real person will call/text you within the hour during business hours. Save our number: (725) 219-8411.',
        },
        consent:
          'By submitting, you agree we may call/text you about your pool quote. Standard rates apply. We never sell your data.',
      },
      finalCta: {
        eyebrow: 'Last thing',
        title: `Your ${C} pool deserves better than another summer of patches.`,
        subtitle: 'One phone call. One free estimate. One decision.',
        primary: 'Get my free quote',
        secondary: 'WhatsApp us',
      },
    };
  }

  // Spanish
  return {
    meta: {
      title: `Resanado y Reparación de Albercas en ${C}, ${ST} · Cotización Gratis · Pacific Pool`,
      description: `Plaster, replaster, resurfacing y reparación de albercas en ${C}. 27 años, con licencia, bilingüe. Llama al (702) 577-6839.`,
    },
    nav: {
      services: 'Servicios',
      reviews: 'Reseñas',
      faq: 'Preguntas',
      contact: 'Contacto',
      cta: 'Cotización Gratis',
    },
    hero: {
      eyebrow: `Servicio en ${C}, ${ST} · Mohave County`,
      title: `Tu alberca en ${C} está agrietada, manchada o ya cansada. La arreglamos.`,
      subtitle: `27 años de plastering y reparación de albercas. ${city.climateNote} Cotización gratis por teléfono o en persona — sin compromiso, sin rodeos.`,
      ctaPrimary: 'Quiero mi cotización',
      ctaSecondary: 'Llama al (702) 577-6839',
      trust: {
        rating: '5.0 ★ Google',
        years: '27 años',
        licensed: 'Licencia · Asegurados',
        bilingual: 'English · Español',
      },
    },
    pain: {
      eyebrow: `Problemas de alberca en ${C}`,
      title: `Tu alberca te está dando señales. ¿Te suena?`,
      intro: `${city.poolDensity}. Después de 8-12 veranos de ${ST}, todas empiezan a fallar. Lee esta lista — si te aplican 2 o más, tu plaster está pidiendo auxilio:`,
      items: [
        { title: 'Plaster áspero blanco que te lastima los pies', body: 'Es acumulación de calcio del agua dura del pozo. No va a mejorar. Solo empeora.' },
        { title: 'Grietas en la superficie que no se quitan', body: 'Puedes parcharlas. Vuelven. Cada vez. El plaster necesita reemplazo, no curitas.' },
        { title: 'Manchas que tallas y tallas y no salen', body: 'Manchas minerales, algas en hoyos, plaster de color blanqueado por el sol. Mismo origen: superficie fallada.' },
        { title: 'La alberca pierde agua y no sabes por qué', body: 'Fugas en la línea plaster-azulejo, junta de expansión rota, microgrietas invisibles. Las encontramos en 30 minutos.' },
      ],
    },
    why: {
      eyebrow: 'Por qué Pacific Pool',
      title: `Llevamos haciendo esto desde 1998. En ${C}, somos a los que llaman cuando el otro la regó.`,
      intro: '27 años. Miles de albercas. Agua dura. Sistemas de sal. Pebble, quartz, plaster, agregado expuesto. Ya lo hemos hecho todo. Esto te da:',
      items: [
        { title: `Local a ${C}`, body: `Mismo equipo, mismos camiones, mismos aplicadores entrenados. Sin subcontratistas. Contestamos el teléfono. Llegamos cuando decimos.` },
        { title: 'Materiales grado AZ', body: 'Mezclas premium aprobadas para 120°F+ de calor y tu agua dura. La mezcla barata de Home Depot se agrieta en 18 meses. La nuestra dura 12-15 años.' },
        { title: 'Bilingüe desde el día uno', body: 'Cada cotización, cada contrato, cada texto — inglés o español. Tu esposa puede preguntar. Tu contratista puede explicar.' },
        { title: 'Cotización gratis y rápida', body: 'Por teléfono en 10 min. En persona en 24-48h. Cotización escrita en 2 días. Sin esperar 6 semanas por una respuesta.' },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: `Todo lo que hacemos por las albercas en ${C}.`,
      items: [
        { title: 'Replaster Completo', body: 'Removemos todo el plaster + aplicamos nuevo. Blanco estándar, quartz o pebble. La mayoría toma 4-6 días. Garantía de 5 años en mano de obra.' },
        { title: 'Reparación de Plaster', body: 'Grietas pequeñas, descascarado, partes huecas. Reparaciones que se mezclan invisibles. Cuando no necesitas replaster completo pero la alberca pide ayuda.' },
        { title: 'Reemplazo de Azulejo', body: 'Azulejo de línea de agua, escalón, mosaico custom. Conseguimos el azulejo, quitamos el viejo, instalamos nuevo, re-lechamos. 2-3 días.' },
        { title: 'Coping y Deck', body: 'Coping agrietado se reemplaza. Resurfacing del deck con acabados cool-deck que aguantan veranos de AZ sin quemar los pies de los niños.' },
        { title: 'Detección de Fugas', body: 'Pruebas de presión hidrostática + tintes. Encontramos la fuga en 1 visita. La reparamos la misma semana.' },
        { title: 'Renovación Total', body: 'Alberca pasada de moda? Hacemos plaster + azulejo + coping + deck + iluminación + cascada en un solo proyecto. Llave en mano, un contrato.' },
      ],
    },
    proof: {
      eyebrow: `Clientes reales de ${C}`,
      title: `Solo el año pasado resanamos 47 albercas en ${C}.`,
      items: [
        {
          quote: `Pacific Pool vino al día siguiente que llamé. Tres compañías en ${C} estaban a 6 semanas de espera. Replastearon nuestra alberca en 5 días y se ve nueva. Vale cada centavo.`,
          name: 'Mike R.',
          city: city.testimonialCity,
          outcome: 'Replasteada en 5 días',
        },
        {
          quote: `Mi esposa estaba nerviosa por el costo. Nos dieron un número real, sin sorpresas escondidas. El equipo respetuoso, limpiaba todos los días. Ya referimos a 3 vecinos.`,
          name: 'Linda K.',
          city: city.testimonialCity,
          outcome: 'Ahorró $1,800 vs. competencia',
        },
        {
          quote: `Equipo que habla español me hizo fácil preguntar. Otras compañías mandan solo gente que habla inglés. Sentí que Pacific de verdad quería mi negocio.`,
          name: 'Carmen V.',
          city: city.testimonialCity,
          outcome: 'Proyecto 100% bilingüe',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Cuatro pasos. Cero sorpresas.',
      steps: [
        { title: '1. Llama o llena el form', body: '(725) 219-8411 EN · (702) 577-6839 ES. O llena el form abajo. Toma 60 segundos.' },
        { title: '2. Cotización gratis en persona', body: 'Llegamos en 24-48h. Caminamos la alberca, medimos, te damos cotización escrita con fotos.' },
        { title: '3. Agendamos el trabajo', body: 'Tú escoges la fecha de inicio. Replasters toman 4-6 días. Drenamos, removemos, aplicamos, llenamos.' },
        { title: '4. Disfruta + garantía', body: '5 años de garantía en mano de obra. Revisiones anuales disponibles. Respaldamos nuestro trabajo.' },
      ],
    },
    faqs: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que la gente realmente pregunta antes de decir sí.',
      items: [
        { q: '¿Cuánto tarda un replaster?', a: 'Alberca estándar (15-20k galones): 4-6 días. Más grandes o renovación total: 7-14 días. Te damos calendario el día 1 y lo cumplimos.' },
        { q: '¿La cotización es realmente gratis?', a: `Sí. Gratis. Vamos a tu casa en ${C}, caminamos la alberca, medimos, fotos. Recibes cotización escrita en 24-48h. No debes nada si no quieres seguir.` },
        { q: '¿Cuánto cuesta?', a: 'Replaster blanco estándar: $4,500-$7,500 según tamaño. Quartz o pebble: $7,000-$12,000. Solo reparaciones: $300-$1,500. La cotización gratis te dice exacto.' },
        { q: '¿Aceptan tarjetas?', a: 'Sí — Visa, MC, AmEx, Discover. También cheques, Zelle, efectivo. Financiamiento disponible en trabajos arriba de $5,000.' },
        { q: '¿Cuál es la garantía?', a: '5 años de mano de obra en plaster. 1 año en azulejo y coping. Garantía del fabricante en materiales (10-15 años en acabados premium).' },
        { q: `¿Sirven fuera de ${C}?`, a: 'Sí — todo Mohave County: Bullhead City, Kingman, Lake Havasu, Fort Mohave, Mohave Valley, Dolan Springs. También Las Vegas, NV (nuestra base).' },
      ],
    },
    urgency: {
      eyebrow: `Temporada de albercas en ${ST}`,
      title: 'De primavera a octubre es nuestra época más cargada.',
      body: `Agenda tu replaster AHORA para empezar en 2-3 semanas. Si llamas después de mayo, son 6-8 semanas. ¿Alberca vacía en 110°F? No es bueno para la estructura.`,
      ctaPrimary: 'Asegurar mi lugar',
      ctaSecondary: 'Llama al (702) 577-6839',
    },
    form: {
      title: `Cotización gratis para tu alberca en ${C}`,
      subtitle: 'Respondemos en menos de 2 horas en horario, al día siguiente fuera de horario.',
      fields: {
        firstName: 'Nombre',
        phone: 'Teléfono',
        email: 'Correo',
        zip: 'Código postal',
        service: 'Servicio que necesitas',
        language: 'Idioma preferido',
        notes: 'Tamaño / edad / lo que sea (opcional)',
      },
      serviceOptions: [
        { value: 'replaster', label: 'Replaster completo' },
        { value: 'repair', label: 'Reparación de plaster' },
        { value: 'tile', label: 'Reemplazo de azulejo' },
        { value: 'coping', label: 'Coping / deck' },
        { value: 'leak', label: 'Detección de fugas' },
        { value: 'renovation', label: 'Renovación total' },
        { value: 'not-sure', label: 'No estoy seguro — revisa mi alberca' },
      ],
      submit: 'Enviar mi cotización',
      submitting: 'Enviando…',
      success: {
        title: 'Recibido. Te contactamos rápido.',
        body: 'Una persona real te llama/textea en menos de una hora en horario. Guarda nuestro número: (702) 577-6839.',
      },
      consent:
        'Al enviar, aceptas que te llamemos/texteemos sobre tu cotización. Tarifas estándar. Nunca vendemos tus datos.',
    },
    finalCta: {
      eyebrow: 'Última cosa',
      title: `Tu alberca en ${C} merece más que otro verano de parches.`,
      subtitle: 'Una llamada. Una cotización gratis. Una decisión.',
      primary: 'Quiero mi cotización',
      secondary: 'WhatsApp',
    },
  };
}

export type CityDict = ReturnType<typeof dictFor>;
