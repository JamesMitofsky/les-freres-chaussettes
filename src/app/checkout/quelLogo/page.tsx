import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import Image from 'next/image';

export default function SelectLogo() {
  return (
    <CheckoutWrapper
      currentStep={3}
      title="Quel logo souhaitez-vous utiliser ?"
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'faceArriere',
      }}
    >
      <div className="flex flex-col gap-2 h-48 w-full items-center justify-center rounded-lg border-2 border-dotted border-primary">
        <Image
          priority
          src="/svgs/upload-arrow.svg"
          height={80}
          width={80}
          alt="Uploader mon logo"
        />
        Utiliser mon logo
      </div>
    </CheckoutWrapper>
  );
}
