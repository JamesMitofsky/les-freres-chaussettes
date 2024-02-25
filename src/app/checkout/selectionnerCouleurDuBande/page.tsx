import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function SelectBandColor() {
  return (
    <CheckoutLayout
      title="select band color"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'quelleTaille'}}
     >
      customized content for logo selection
    </CheckoutLayout>
  );
}
