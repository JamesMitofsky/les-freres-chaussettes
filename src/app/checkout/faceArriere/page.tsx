import CheckoutWrapperWithImage from '@/components/checkout/CheckoutWrapperWithImage';

export default function BacksideOfSock() {
  return (
    <CheckoutWrapperWithImage
      currentStep={3}
      title="Face arrière"
      subtitle="Personnalisation de la face arrière de vos chaussettes"
      image={{
        src: '/images/socks-back.jpeg',
        alt: 'Face arrière des chaussettes',
      }}
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'ajouterNomEtNumero',
      }}
    />
  );
}
