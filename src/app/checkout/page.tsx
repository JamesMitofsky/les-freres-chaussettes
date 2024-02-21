import CheckoutLayout from '@/components/CheckoutLayout';

export default function CheckoutFlow() {
  return (
    <CheckoutLayout
      title="Souhaitez-vous imprimer un logo à l’avant ?"
      image={{src: "/images/socks-front.jpeg", alt: "Chaussettes"}}
      primaryButton={{ label: 'Utiliser un logo', onClick: () => null }}
      secondaryButton={{
        label: 'Ne pas utiliser de logo',
        onClick: () => null,
      }}
     />
  );
}
