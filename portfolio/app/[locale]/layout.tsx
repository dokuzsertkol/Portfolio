import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {ThemeProvider} from './components/ThemeProvider';
import Navbar from './components/Navbar';

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'tr'}];
}

type Props = {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params} : Props) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
                <Navbar />
                <div> {children} </div>
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}