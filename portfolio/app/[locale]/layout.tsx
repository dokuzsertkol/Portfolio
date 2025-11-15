import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {ThemeProvider} from './components/ThemeProvider';
import Navbar from './components/Navbar';

export async function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'tr'}];
}

const locales = ["en", "tr"];

type Props = {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params} : Props) {
    const {locale} = await params;
    if (!hasLocale(locales, locale)) {
        notFound();
    }
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <ThemeProvider>
            <Navbar t={messages.Navbar}/>
            <div> {children} </div>
        </ThemeProvider>
    );
}