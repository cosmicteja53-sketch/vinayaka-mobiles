import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://vinayakamobiles.in'),
    title: 'Vinayaka Mobiles | వినాయక మొబైల్స్ — Kanipakam, Andhra Pradesh',
    description:
        "Kanipakam's most trusted mobile destination. Latest smartphones, accessories, and same-day repair services. Samsung, Vivo, OPPO and more.",
    keywords: 'mobile shop Kanipakam, smartphones Andhra Pradesh, mobile repair Kanipakam, Samsung Vivo OPPO Kanipakam',
    openGraph: {
        title: 'Vinayaka Mobiles | వినాయక మొబైల్స్',
        description: "Kanipakam's most trusted mobile destination.",
        url: 'https://vinayakamobiles.in',
        siteName: 'Vinayaka Mobiles',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vinayaka Mobiles | వినాయక మొబైల్స్',
        description: "Kanipakam's most trusted mobile destination.",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
