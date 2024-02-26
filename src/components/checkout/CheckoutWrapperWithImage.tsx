import { ComponentProps } from 'react';
import Image from 'next/image';
import CheckoutWrapper from './CheckoutWrapper';

// Avoid repeating the same props in multiple components
type CheckoutWrapperProps = ComponentProps<typeof CheckoutWrapper>;
type CheckoutWrapperWithoutChildren = Omit<CheckoutWrapperProps, 'children'>;

type CheckoutWrapperWithImageProps = Readonly<{
  image: {
    src: string;
    alt: string;
  };
} & CheckoutWrapperWithoutChildren>;

/** Repackage the CheckoutWrapper component to render just an image */
export default function CheckoutWrapperWithImage({
  image,
  ...baseCheckoutWrapperProps
}: CheckoutWrapperWithImageProps) {
  return (
    <CheckoutWrapper {...baseCheckoutWrapperProps}>
      <Image
        src={image.src}
        alt={image.alt}
        className="m-auto max-w-md object-contain"
        fill
      />
    </CheckoutWrapper>
  );
}
