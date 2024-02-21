import { Button } from '@/components/ui/button';
import TypographyH1 from './typography/TypographyH1';

export default function CheckoutLayout({
  title,
  children,
  primaryButton,
  secondaryButton,
}: Readonly<{
  title: string;
  children: React.ReactNode;
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
      {children}
      </div>
      <div className="m-5 flex flex-grow flex-col justify-end gap-2">
        {primaryButtonElement}
        {secondaryButtonElement}
      </div>
    </div>
  );
}
