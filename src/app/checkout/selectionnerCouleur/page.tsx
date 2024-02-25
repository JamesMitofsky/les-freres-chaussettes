import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function SelectColor() {
  return (
    <CheckoutLayout
      title="pick text color"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'selectionnerCouleurDuBande'}}
     >
        select the color please
    </CheckoutLayout>
  );
}
