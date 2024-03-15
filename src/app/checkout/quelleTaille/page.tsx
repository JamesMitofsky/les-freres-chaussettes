import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

export default function SelectSize() {
  return (
    <CheckoutWrapper
      currentStep={8}
      title="Quelle taille pour vos chaussettes ?"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'previsualisation'}}
     >
      <div>s</div>
      <div>m</div>
      <div>l</div>
      <div>xl</div>
    </CheckoutWrapper>
  );
}
