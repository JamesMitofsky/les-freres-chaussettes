import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { UploaderBackground } from '@/components/shared/Upload/UploadBackground';

export default function SelectLogo() {
  return (
    <CheckoutWrapper
      currentStep={2}
      title="Quel logo souhaitez-vous utiliser ?"
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'faceArriere',
      }}
    >
      <UploaderBackground text="Utiliser mon logo" />
    </CheckoutWrapper>
  );
}
