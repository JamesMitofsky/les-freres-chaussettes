import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

export default function SelectColor() {
  return (
    <CheckoutWrapper
      title="pick text color"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'selectionnerCouleurDuBande'}}
     >
        select the color please
    </CheckoutWrapper>
  );
}
