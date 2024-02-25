import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function SelectNameAndNumber() {
  return (
    <CheckoutLayout
      title="first customization step"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'selectionnerCouleur'}}
     >
      add name and number
    </CheckoutLayout>
  );
}