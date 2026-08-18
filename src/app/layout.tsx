import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'RMSSD.COM | The Database of True RMSSD',
  description:
    'Open peer-reviewed database for True RMSSD — standardized HRV metrics from consumer devices, validated with open protocols.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white">
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
