import { ComponentProps } from 'react';
import Image from 'next/image';
import CheckoutLayout from './CheckoutLayout';

// Avoid repeating the same props in multiple components
type CheckoutLayoutProps = ComponentProps<typeof CheckoutLayout>;
type CheckoutLayoutWithoutChildren = Omit<CheckoutLayoutProps, 'children'>;

type CheckoutLayoutWithImageProps = {
  image: {
    src: string;
    alt: string;
  };
} & CheckoutLayoutWithoutChildren;

/** Repackage the CheckoutLayout component to render just an image */
export default function CheckoutLayoutWithImage({
  image,
  ...props
}: CheckoutLayoutWithImageProps) {
  return (
    <CheckoutLayout {...props}>
      <Image
        src={image.src}
        alt={image.alt}
        className="m-auto max-w-md object-contain"
        fill
      />
    </CheckoutLayout>
  );
}
