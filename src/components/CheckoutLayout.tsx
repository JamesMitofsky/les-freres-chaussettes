import { Button } from '@/components/ui/button';
import Image from 'next/image';
import TypographyH1 from './typography/TypographyH1';

export default function CheckoutLayout({
  title,
  image,
  primaryButton,
  secondaryButton,
}: Readonly<{
  title: string;
  image: {
    src: string;
    alt: string;
  };
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
}>) {
  const primaryButtonElement = primaryButton && (
    <Button className="text-white">{primaryButton.label}</Button>
  );

  const secondaryButtonElement = secondaryButton && (
    <Button variant="outline">{secondaryButton.label}</Button>
  );

  return (
    <div className="mx-5 flex h-full flex-col">
      <TypographyH1 text={title} />
      <div className="relative h-full w-full">
        <Image
          src={image.src}
          alt={image.alt}
          className="m-auto max-w-md object-contain"
          fill
        />
      </div>
      <div className="m-5 flex flex-grow flex-col justify-end gap-2">
        {primaryButtonElement}
        {secondaryButtonElement}
      </div>
    </div>
  );
}
