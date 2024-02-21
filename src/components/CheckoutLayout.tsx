import { Button } from '@/components/ui/button';
import Image from 'next/image';
import TypographyH1 from './typography/TypographyH1';

export default function CheckoutLayout({
  title,
  imageSource,
  primaryButton,
  secondaryButton,
}: Readonly<{
  title: string;
  imageSource: string;
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
      <div className="flex flex-col justify-center h-full">
      <Image
          src={imageSource}
          alt="Chaussettes"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', maxWidth: "30rem", margin: "auto", height: 'auto' }} // optional
        />
      </div>
      <div className="m-5 flex flex-grow flex-col justify-end gap-2">
        {primaryButtonElement}
        {secondaryButtonElement}
      </div>
    </div>
  );
}
