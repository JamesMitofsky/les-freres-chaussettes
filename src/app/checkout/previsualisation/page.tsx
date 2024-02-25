import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import CompletePrevisualization from '@/components/checkout/CompletePrevisualization';

export default function Previsualization() {
  return (
    <CheckoutLayout
      title="Prévisualisation de vos chaussettes"
    >
      <CompletePrevisualization />
    </CheckoutLayout>
  );
}
