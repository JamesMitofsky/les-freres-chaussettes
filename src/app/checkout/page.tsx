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
          src="/images/socks-front.jpeg"
          alt="Chaussettes"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', maxWidth: "30rem", margin: "auto", height: 'auto' }} // optional
        />
    </CheckoutLayout>
  );
}
