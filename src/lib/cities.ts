export type CityConfig = {
  slug: 'bullhead' | 'kingman' | 'lake-havasu';
  name: string;
  fullName: string;
  state: string;
  zipDefault: string;
  population: string;
  poolDensity: string; // "1 in 5 homes has a pool"
  climateNote: string; // selling point for the city
  heroPhoto: string; // path or Unsplash URL
  testimonialCity: string; // displayed in testimonial card
};

export const cities: Record<CityConfig['slug'], CityConfig> = {
  'lake-havasu': {
    slug: 'lake-havasu',
    name: 'Lake Havasu',
    fullName: 'Lake Havasu City',
    state: 'AZ',
    zipDefault: '86403',
    population: '57,000 residents',
    poolDensity: '1 in 3 homes has a pool',
    climateNote: '320 days of sunshine. Pools are not optional here — they are the lifestyle.',
    heroPhoto: 'https://images.unsplash.com/photo-1572989072728-b5db204f81d1?w=2400&q=85',
    testimonialCity: 'Lake Havasu City, AZ',
  },
  'kingman': {
    slug: 'kingman',
    name: 'Kingman',
    fullName: 'Kingman',
    state: 'AZ',
    zipDefault: '86401',
    population: '32,000 residents',
    poolDensity: 'Hundreds of family pools across Hualapai Foothills + Stockton Hill',
    climateNote: '110°F summers + hard well water = your plaster takes a beating.',
    heroPhoto: 'https://images.unsplash.com/photo-1561518995-22e02bdc23e1?w=2400&q=85',
    testimonialCity: 'Kingman, AZ',
  },
  'bullhead': {
    slug: 'bullhead',
    name: 'Bullhead',
    fullName: 'Bullhead City',
    state: 'AZ',
    zipDefault: '86442',
    population: '41,000 residents',
    poolDensity: 'Highest pool-per-capita in Mohave County',
    climateNote: 'The hottest city in Arizona (120°F+ summers). Your pool is the only thing standing between you and heatstroke.',
    heroPhoto: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=2400&q=85',
    testimonialCity: 'Bullhead City, AZ',
  },
};

export const citySlugs = ['lake-havasu', 'kingman', 'bullhead'] as const;
