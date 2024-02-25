import CheckoutLayout from '@/components/checkout/CheckoutLayout';

export default function CheckoutCart() {
  return (
    <CheckoutLayout
      title="Panier"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'unknown'}}
    >
        <div>cart</div>
    </CheckoutLayout>
  );
}
