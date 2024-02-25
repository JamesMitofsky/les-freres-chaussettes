import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function SelectLogo() {
  return (
    <CheckoutLayout
      title="Quel logo souhaitez-vous utiliser ?"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'faceArriere'}}
     >
      customized content for logo selection
    </CheckoutLayout>
  );
}
