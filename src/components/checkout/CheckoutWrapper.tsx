'use client';

import { useRouter } from 'next/navigation';
import TypographyH1 from '../typography/TypographyH1';
import Subtitle from '../typography/Subtitle';
import ActionButtons from '../ActionButtons';
import BackNavigation from '../BackNavigation';

type CheckoutButtonProps = {
  label: string;
  relativePathToNextPage: string;
};

type CommonCheckoutWrapperProps = {
  primaryButton?: CheckoutButtonProps;
  secondaryButton?: CheckoutButtonProps;
  children: React.ReactNode;
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
  | (CheckoutWithTitle)
  | (CheckoutWithCustomHeader)
>;

export default function CheckoutWrapper({
  primaryButton,
  secondaryButton,
  children,
  title,
  subtitle,
  customHeader,
}: CheckoutWrapperProps) {
  const { push } = useRouter();

  const generateButtonProps = (button: CheckoutButtonProps) => ({
    label: button.label,
    action: () => push(button.relativePathToNextPage),
  });

  return (
    <div className="mx-5 flex h-full flex-col">
      <BackNavigation />
      {title ? (
        <>
          <TypographyH1 text={title} />
          {subtitle && <Subtitle text={subtitle} />}
        </>
      ): (
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
