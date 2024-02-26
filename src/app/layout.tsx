import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';


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
    <html lang="en">
      <body>
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
