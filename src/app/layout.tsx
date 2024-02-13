import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Les Frères Chaussettes',
  description:
    'Joue avec des chaussettes de sport personnalisées, à ton effigie et pour toutes tes compétitions !',
};

const sizeOfLogo = 52;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className={` ${inter.className}`}>
        <header className="m-4 flex justify-center">
          <Image
            priority
            src="/svgs/logo.svg"
            height={sizeOfLogo}
            width={sizeOfLogo}
            alt="Marque des Frères Chaussettes"
          />
        </header>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
