'use client';

import { useRouter } from 'next/navigation';
import localFont from 'next/font/local';
import TypographyH1 from '../typography/TypographyH1';
import Subtitle from '../typography/Subtitle';
import ActionButtons from '../ActionButtons';
import { Progress } from '../ui/progress';

const sportsFont = localFont({
  src: '../../../public/fonts/OctinSportsHv.otf',
  display: 'swap',
});

type CheckoutButtonProps = {
  label: string;
  relativePathToNextPage: string;
};

type CommonCheckoutWrapperProps = {
  primaryButton?: CheckoutButtonProps;
  secondaryButton?: CheckoutButtonProps;
  children: React.ReactNode;
  useSportsFont?: boolean;
  currentStep?: number;
};

export type CheckoutWithTitle = CommonCheckoutWrapperProps & {
  title: string;
  subtitle?: string;
  customHeader?: never;
};

type CheckoutWithCustomHeader = CommonCheckoutWrapperProps & {
  customHeader: React.ReactNode;
  title?: never;
  subtitle?: never;
};

type CheckoutWrapperProps = Readonly<
  CheckoutWithTitle | CheckoutWithCustomHeader
>;

export default function CheckoutWrapper({
  primaryButton,
  secondaryButton,
  children,
  title,
  subtitle,
  customHeader,
  useSportsFont,
  currentStep,
}: CheckoutWrapperProps) {
  const { push } = useRouter();

  const generateButtonProps = (button: CheckoutButtonProps) => ({
    label: button.label,
    action: () => push(button.relativePathToNextPage),
  });

  return (
    <div
      className={`mx-5 flex h-full flex-col ${useSportsFont && sportsFont.className}`}
    >
      {currentStep !== (null || undefined) && <Progress value={(currentStep / 8) * 100} />}
      {title ? (
        <>
          <TypographyH1 text={title} />
          {subtitle && <Subtitle text={subtitle} />}
        </>
      ) : (
        customHeader
      )}
      <main className="relative flex h-full w-full flex-col">{children}</main>
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
