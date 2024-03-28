'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import BackNavigation from './BackNavigation';

const sizeOfLogo = 52;

export default function GlobalHeader() {
  const currentPath = usePathname();
  return (
    <header className="m-4 flex justify-between">
      {currentPath !== '/checkout' ? <BackNavigation /> : <div />}
      <Image
        priority
        src="/svgs/logo.svg"
        height={sizeOfLogo}
        width={sizeOfLogo}
        alt="Marque des Frères Chaussettes"
      />
      <div />
    </header>
  );
}
