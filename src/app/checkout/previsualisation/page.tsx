import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function Previsualization() {
  return (
    <CheckoutLayout
      title="Prévisualisation de vos chaussettes"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'unknown'}}
     >
   custom pre-rendering
    </CheckoutLayout>
  );
}
