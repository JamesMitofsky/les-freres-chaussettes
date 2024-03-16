import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import CompletePrevisualization from '@/components/checkout/CompletePrevisualization';

export default function Previsualization() {
  return (
    <CheckoutWrapper
      currentStep={8}
      title="Prévisualisation de vos chaussettes"
    >
      <CompletePrevisualization />
    </CheckoutWrapper>
  );
}
