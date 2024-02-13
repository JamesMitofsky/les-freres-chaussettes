import CheckoutLayout from '@/components/CheckoutLayout';
import Image from 'next/image';

export default function CheckoutFlow() {
  return (
    <CheckoutLayout
      title="Souhaitez-vous imprimer un logo à l’avant ?"
      primaryButton={{ label: 'Utiliser un logo', onClick: () => null }}
      secondaryButton={{
        label: 'Ne pas utiliser de logo',
        onClick: () => null,
      }}
    >
      <Image
        src="/images/socks-front.png"
        alt="Chaussettes"
        layout="fill"
        objectFit="contain"
      />
    </CheckoutLayout>
  );
}
