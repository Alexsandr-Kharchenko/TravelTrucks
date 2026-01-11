import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { SvgSprite } from '@/components/SvgSprite/SvgSprite';

export const metadata: Metadata = {
  title: {
    default: 'TravelTrucks',
    template: '%s | TravelTrucks',
  },
  description: 'Camper rental service',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SvgSprite />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
