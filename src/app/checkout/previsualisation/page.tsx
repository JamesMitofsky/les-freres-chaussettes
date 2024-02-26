import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import CompletePrevisualization from '@/components/checkout/CompletePrevisualization';

export default function Previsualization() {
  return (
    <CheckoutWrapper
      title="Prévisualisation de vos chaussettes"
    >
      <CompletePrevisualization />
    </CheckoutWrapper>
  );
}
