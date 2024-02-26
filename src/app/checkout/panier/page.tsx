import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';

export default function CheckoutCart() {
  return (
    <CheckoutWrapper
      title="Panier"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'unknown'}}
    >
        <div>cart</div>
    </CheckoutWrapper>
  );
}
