import Image from 'next/image';
import CheckoutWrapper, { CheckoutWithTitle } from './CheckoutWrapper';

type CheckoutWithTitleSansChildren = Omit<CheckoutWithTitle, 'children'>;

type CheckoutWrapperWithImageProps = Readonly<{
  image: {
    src: string;
    alt: string;
  };
} & CheckoutWithTitleSansChildren>;

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
