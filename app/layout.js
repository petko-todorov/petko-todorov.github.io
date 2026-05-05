import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import AOSProvider from '@/components/AOSProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Petko Todorov | Portfolio',
    description:
        'Full Stack Developer portfolio of Petko Todorov - skills, projects, certificates and contact',
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
        >
            <body
                className={`${spaceGrotesk.className} min-h-full flex flex-col`}
            >
                <AOSProvider>{children}</AOSProvider>
            </body>
        </html>
    );
}
