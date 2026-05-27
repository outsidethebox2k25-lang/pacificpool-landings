import { notFound, redirect } from 'next/navigation';

const locales = ['en', 'es'] as const;
const hasLocale = (l: string): l is (typeof locales)[number] =>
  (locales as readonly string[]).includes(l);

export default async function LangIndex({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  // Default to Lake Havasu (largest pool market in Mohave County)
  redirect(`/${lang}/lake-havasu`);
}
