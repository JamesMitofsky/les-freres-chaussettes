import CheckoutWrapperWithImage from '@/components/checkout/CheckoutWrapperWithImage';

export default function DetermineInclusionOfFrongLogo() {
  return (
    <CheckoutWrapperWithImage
      title="Souhaitez-vous imprimer un logo à l’avant ?"
      image={{src: "/images/socks-front.jpeg", alt: "Chaussettes"}}
      primaryButton={{ label: 'Utiliser un logo', relativePathToNextPage: 'quelLogo'}}
      secondaryButton={{
        label: 'Ne pas utiliser de logo',
        relativePathToNextPage: 'faceArriere',
      }}
     />
  );
}
