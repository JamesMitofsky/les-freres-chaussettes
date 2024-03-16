import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

export default function SelectBandColor() {
  return (
    <CheckoutWrapper
      currentStep={6}
      title="select band color"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'quelleTaille'}}
     >
      customized content for logo selection
    </CheckoutWrapper>
  );
}
