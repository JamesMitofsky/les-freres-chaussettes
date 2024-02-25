import { Button } from '@/components/ui/button';
import TypographyH1 from '../typography/TypographyH1';
import Subtitle from '../typography/Subtitle';


type CheckoutLayoutProps = Readonly<
  {
    title: string;
    subtitle?: string;
    primaryButton?: {
      label: string;
      onClick: () => void;
    };
    secondaryButton?: {
      label: string;
      onClick: () => void;
    };
    children: React.ReactNode;
  }
>;

export default function CheckoutLayout({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  children,
}: CheckoutLayoutProps) {
  const primaryButtonElement = primaryButton && (
    <Button className="text-white">{primaryButton.label}</Button>
  );

  const secondaryButtonElement = secondaryButton && (
    <Button variant="outline">{secondaryButton.label}</Button>
  );

  return (
    <div className="mx-5 flex h-full flex-col">
      <TypographyH1 text={title} />
      {subtitle && <Subtitle text={subtitle} />}
      <div className="relative h-full w-full">
       {children}
      </div>
      <div className="m-5 flex flex-grow flex-col justify-end gap-2">
        {primaryButtonElement}
        {secondaryButtonElement}
      </div>
    </div>
  );
}
