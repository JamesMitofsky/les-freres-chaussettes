import CheckoutLayoutWithImage from '@/components/checkout/CheckoutLayoutWithImage';

function FaceAvant() {
  return (
    <CheckoutLayoutWithImage
      image={{
        src: '/images/example-socks-front.jpeg',
        alt: "Des chausettes d'exemple.",
      }}
      title="Face avant"
      subtitle="Personnalisation de la face avant
        de vos chaussettes"
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'checkout/souhaitezVousImprimerUnLogo' }}
    />
  );
}

export default FaceAvant;
