import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function template(str: string, vars: Record<string, string | number>) {
  return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

export const PHONE_AI = '+17025533314';      // 24/7 bilingual AI agent (primary CTA)
export const PHONE_EN = '+17252198411';       // English office line
export const PHONE_ES = '+17025776839';       // Spanish office line
export const WHATSAPP_NUMBER = '17025776839';

export const telLink = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, '')}`;
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const formatPhone = (phone: string) => {
  const digits = phone.replace(/[^0-9]/g, '');
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
};

export type CitySlug = 'bullhead' | 'kingman' | 'lake-havasu';

export type LeadPayload = {
  type: 'landing_lead';
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  zipCode: string;
  city: string;
  service_type?: string;
  language_pref: 'EN' | 'ES';
  lead_source: string;
  notes?: string;
  utm?: { source?: string; medium?: string; campaign?: string };
};

export async function pushLeadToGHL(
  webhookUrl: string | undefined,
  payload: LeadPayload,
): Promise<boolean> {
  if (!webhookUrl || webhookUrl.includes('REPLACE_ME')) {
    console.warn('GHL webhook not configured');
    return false;
  }
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        source: 'pacificpool-landings',
        landing_url: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: new Date().toISOString(),
        tags: [payload.lead_source, payload.city.toLowerCase().replace(/\s/g, '-'), 'pool', 'landing'],
      }),
    });
    return res.ok;
  } catch (e) {
    console.error('GHL push failed:', e);
    return false;
  }
}

export function readUTM(): LeadPayload['utm'] {
  if (typeof window === 'undefined') return undefined;
  try {
    const raw = sessionStorage.getItem('pp_utm');
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

export const shimmer = (w = 600, h = 400) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g"><stop stop-color="#e0e6e9" offset="0%"/><stop stop-color="#faf3e1" offset="50%"/><stop stop-color="#e0e6e9" offset="100%"/></linearGradient></defs><rect width="${w}" height="${h}" fill="#f4ebd8"/><rect width="${w}" height="${h}" fill="url(#g)" opacity="0.5"/></svg>`;
  const b64 = typeof window === 'undefined' ? Buffer.from(svg).toString('base64') : btoa(svg);
  return `data:image/svg+xml;base64,${b64}`;
};
