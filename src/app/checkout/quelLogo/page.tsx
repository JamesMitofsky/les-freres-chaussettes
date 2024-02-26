import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

export default function SelectLogo() {
  return (
    <CheckoutWrapper
      title="Quel logo souhaitez-vous utiliser ?"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'faceArriere'}}
     >
      customized content for logo selection
    </CheckoutWrapper>
  );
}
