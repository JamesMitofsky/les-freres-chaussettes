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
import MiniPrevisualization from '@/components/checkout/MiniPrevisualization';

export default function SelectBandColor() {
  const { bandColor: bandColorId } = fieldIds;
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
          [bandColorId]: color,
        },
      }));
    },
    [setPendingOrder, bandColorId],
  );

  const { customizationFields } = pendingOrder;

  return (
    <CheckoutWrapper
      currentStep={5}
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'quelleTaille',
      }}
      customHeader={<MiniPrevisualization />}
      className="items-center justify-around"
    >
      <SockBandPreview color={customizationFields[bandColorId]} />
      <GradientPicker setHexColor={handleColorSetting} />
    </CheckoutWrapper>
  );
}
