'use client';

import { AllowedColors, GradientPicker } from '@/components/GradientPicker';
import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { useCallback } from 'react';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import useLocalStorageState from 'use-local-storage-state';
import fieldIds from '@/globals/fieldIds';
import { playerObject } from '@/globals/defaultPlayer';
import SockBandPreview from '@/components/checkout/SockBandPreview';

export default function SelectColor() {
  const { color: colorId } = fieldIds;
  const [pendingOrder, setPendingOrder] =
  useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
    defaultValue: playerObject,
  });
  
  const handleColorSetting = useCallback(
    (color: AllowedColors) => {
      setPendingOrder((prevOrder) => ({
        ...prevOrder,
        customizationFields: {
          ...prevOrder.customizationFields,
          [colorId]: color,
        },
      }));
    },
    [setPendingOrder, colorId],
    );
    
    const { customizationFields } = pendingOrder;

  return (
    <CheckoutWrapper
      currentStep={5}
      title="pick text color"
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'selectionnerCouleurDuBande',
      }}
      className="items-center justify-around"
    >
      <SockBandPreview color={customizationFields[colorId]} />
      <GradientPicker setHexColor={handleColorSetting} />
    </CheckoutWrapper>
  );
}
