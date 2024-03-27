'use client';

import { useRouter } from 'next/navigation';
import TypographyH1 from '../typography/TypographyH1';
import Subtitle from '../typography/Subtitle';
import ActionButtons from '../ActionButtons';
import { Progress } from '../ui/progress';

type CheckoutButtonProps = {
  label: string;
  relativePathToNextPage: string;
};

type CommonCheckoutWrapperProps = Readonly<{
  primaryButton?: CheckoutButtonProps;
  secondaryButton?: CheckoutButtonProps;
  children: React.ReactNode;
  currentStep?: number;
  className?: string;
  title?: string;
  subtitle?: string;
  customHeader?: React.ReactNode;
}>;

export type CheckoutWithTitle = CommonCheckoutWrapperProps & {
  title: string;
  subtitle?: string;
  customHeader?: never;
};

export default function CheckoutWrapper({
  primaryButton,
  secondaryButton,
  children,
  title,
  subtitle,
  customHeader,
  currentStep,
  className,
}: CommonCheckoutWrapperProps) {
  const { push } = useRouter();

  const generateButtonProps = (button: CheckoutButtonProps) => ({
    label: button.label,
    action: () => push(button.relativePathToNextPage),
  });

  return (
    <div
      className="mx-5 flex h-full flex-col"
    >
      {currentStep !== (null || undefined) && <Progress value={(currentStep / 8) * 100} />}
      {customHeader && customHeader}
      {title && <TypographyH1 text={title} />}
      {subtitle && <Subtitle text={subtitle} />}
      <main className={`relative flex h-full w-full flex-col ${className}`}>{children}</main>
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
