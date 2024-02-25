'use client';

import { useRouter } from 'next/navigation';
import TypographyH1 from '../typography/TypographyH1';
import Subtitle from '../typography/Subtitle';
import ActionButtons from '../ActionButtons';

type CheckoutButtonProps = {
  label: string;
  relativePathToNextPage: string;
};

type CheckoutLayoutProps = Readonly<{
  title: string;
  subtitle?: string;
  primaryButton?: CheckoutButtonProps;
  secondaryButton?: CheckoutButtonProps;
  children: React.ReactNode;
}>;

export default function CheckoutLayout({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  children,
}: CheckoutLayoutProps) {
  const { push } = useRouter();

  const generateButtonProps = (button: CheckoutButtonProps) => ({
    label: button.label,
    action: () => push(button.relativePathToNextPage),
  });

  return (
    <div className="mx-5 flex h-full flex-col">
      <TypographyH1 text={title} />
      {subtitle && <Subtitle text={subtitle} />}
      <div className="relative h-full w-full">{children}</div>
      {primaryButton && (
        <ActionButtons
          primaryButton={generateButtonProps(primaryButton)}
          secondaryButton={
            secondaryButton && generateButtonProps(secondaryButton)
          }
        />
      )}
    </div>
  );
}
