import CheckoutLayoutWithImage from '@/components/checkout/CheckoutLayoutWithImage';

export default function BacksideOfSock() {
  return (
    <CheckoutLayoutWithImage
      title="Face arrière"
      subtitle="Personnalisation de la face arrière de vos chaussettes"
      image={{ src: '/images/socks-back.jpeg', alt: 'Face arrière des chaussettes' }}
      primaryButton={{ label: 'Continuer', relativePathToNextPage: 'ajouterNomEtNumero'}}
    />
  );
}
