import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function SelectSize() {
  return (
    <CheckoutLayout
      title="Quelle taille pour vos chaussettes ?"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'previsualisation'}}
     >
      <div>s</div>
      <div>m</div>
      <div>l</div>
      <div>xl</div>
    </CheckoutLayout>
  );
}
