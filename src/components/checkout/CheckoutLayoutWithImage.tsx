import { ComponentProps } from 'react';
import Image from 'next/image';
import CheckoutLayout from './CheckoutLayout';

// Avoid repeating the same props in multiple components
type CheckoutLayoutProps = ComponentProps<typeof CheckoutLayout>;

type CheckoutLayoutWithImageProps = {
  image: {
    src: string;
    alt: string;
  };
} & CheckoutLayoutProps;

/** Repackage the CheckoutLayout component to render just an image */
export default function CheckoutLayoutWithImage({
  image,
  ...baseCheckoutLayoutProps
}: CheckoutLayoutWithImageProps) {
  return (
    <CheckoutLayout {...baseCheckoutLayoutProps}>
      <Image
        src={image.src}
        alt={image.alt}
        className="m-auto max-w-md object-contain"
        fill
      />
    </CheckoutLayout>
  );
}
