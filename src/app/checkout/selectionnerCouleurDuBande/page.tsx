import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

export default function SelectBandColor() {
  return (
    <CheckoutWrapper
      title="select band color"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'quelleTaille'}}
     >
      customized content for logo selection
    </CheckoutWrapper>
  );
}
