import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nova Auditorium - Event Venue Booking',
  description:
    'Nova Auditorium in Kozhikode offers premium event spaces for weddings, corporate events, conferences, and celebrations. Book your perfect venue today.',
  keywords:
    'event venue, auditorium, wedding halls, conference room, celebratory events, Kozhikode',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
