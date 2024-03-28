import { gql, useMutation } from '@apollo/client';
import localFont from 'next/font/local';
// import BackSockPreview from '../shared/BackSockPreview';
// import ReactToPrint from "react-to-print"
// import { useRef } from 'react';
// import FrontSockPreview from '../shared/FrontSockPreview';
// import { Button } from '../ui/button';
import Image from 'next/image';

import fieldIds from '@/globals/fieldIds';
import CartProduct from '@/types/customizedPairOfSocks';

import { UploadLogo } from '../shared/Upload/UploadLogo';
import { Loader } from '../ui/Loader';

const sportsFont = localFont({
  src: '../../../public/fonts/OctinSportsHv.otf',
  display: 'swap',
});

const UPDATE_CUSTOMIZATION_VALUE = gql`
  mutation ($value: String!, $updateCustomizationValueId: Float!) {
    updateCustomizationValue(value: $value, id: $updateCustomizationValueId) {
      id
      value
    }
  }
`;

export const SockSmallPreviewAndPrint: React.FC<{ product: CartProduct }> = ({
  product,
}) => {
  // TODO : If we add other products, we must switch on product id to adapt style and way to display
  // const refToPrint = useRef<HTMLDivElement>(null);

  const [updateCustomizationValue, { data, loading }] = useMutation(
    UPDATE_CUSTOMIZATION_VALUE,
  );

  const color: string =
    product.customizationValues.find(
      (element) => element.field.id === fieldIds.color,
    )?.value || 'black';
  const number: string =
    product.customizationValues.find(
      (element) => element.field.id === fieldIds.number,
    )?.value || '';
  const name: string =
    product.customizationValues.find(
      (element) => element.field.id === fieldIds.name,
    )?.value || '';
  const bandColor: string =
    product.customizationValues.find(
      (element) => element.field.id === fieldIds.bandColor,
    )?.value || 'black';
  const logo: string =
    product.customizationValues.find(
      (element) => element.field.id === fieldIds.image,
    )?.value || '';

  // const toPrintComponent = []
  // for (let i = 0; i < product.quantity; i++) {
  //     toPrintComponent.push(
  //         <BackSockPreview
  //             data={{
  //                 playerName: name,
  //                 playerNumber: number,
  //                 bandsColor: bandColor,
  //                 textColor: color
  //             }} />
  //     )
  //     toPrintComponent.push(
  //         <BackSockPreview
  //             data={{
  //                 playerName: name,
  //                 playerNumber: number,
  //                 bandsColor: bandColor,
  //                 textColor: color
  //             }} />
  //     )
  // }
  // for (let i = 0; i < product.quantity; i++) {
  //     toPrintComponent.push(
  //         <FrontSockPreview data={{ logo_url: logo }} />
  //     )
  //     toPrintComponent.push(
  //         <FrontSockPreview data={{ logo_url: logo }} />
  //     )
  // }

  const handleUpdateCustomizationLogo = async (url: string) => {
    const customizationValueId = product.customizationValues.find(
      (element) => element.field.id === fieldIds.image,
    )?.id;
    await updateCustomizationValue({
      variables: {
        updateCustomizationValueId: customizationValueId,
        value: url,
      },
    });
  };
  return (
    <div>
      <div>
        <p className="font-semibold">
          {product.quantity}x {product.base?.size}
        </p>
      </div>
      <div className="flex items-center rounded border">
        <div className="flex flex-col items-center gap-3 p-3">
          <div style={{ backgroundColor: bandColor }} className="h-6 w-8" />
          <div
            style={{ color }}
            className={`flex flex-col items-center justify-center ${sportsFont.className}`}
          >
            <div className="w-min text-5xl">{number}</div>
            <div className="text-xl">{name}</div>
          </div>
          <div style={{ backgroundColor: bandColor }} className="h-6 w-8" />
        </div>

        <div>
          <UploadLogo isMultiple={false} onUrl={handleUpdateCustomizationLogo}>
            <Image
              alt="logo-preview"
              className="aspect-square w-32 object-scale-down"
              src={data ? data.updateCustomizationValue.value : logo}
            />
          </UploadLogo>
          {loading && <Loader />}
        </div>
      </div>
      {/* <div style={{ display: "none" }}>
                <div ref={refToPrint} style={{transform: 'scaleX(-1)'}}>
                    {toPrintComponent}
                </div>
            </div>
            <ReactToPrint
                bodyClass="print-agreement"
                content={() => refToPrint.current}
                trigger={() => (
                    <Button>
                        Imprimer
                    </Button>
                )} /> */}
    </div>
  );
};
