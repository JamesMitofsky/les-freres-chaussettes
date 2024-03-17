'use client';

import { AllowedColors, GradientPicker } from '@/components/GradientPicker';
import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { useCallback } from 'react';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import fieldIds from '@/globals/fieldIds';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import useLocalStorageState from 'use-local-storage-state';

export default function SelectColor() {
  const [pendingOrder, setPendingOrder] =
    useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
      defaultValue: {
        quantity: 1,
        productId: 1,
        baseId: undefined,
        customizationFields: {
          [fieldIds.number]: '',
          [fieldIds.name]: '',
          [fieldIds.color]: '',
          [fieldIds.bandColor]: '',
          [fieldIds.image]: '',
        },
      },
    });
  const handleColorSetting = useCallback(
    (color: AllowedColors) => {
      setPendingOrder((prevOrder) => ({
        ...prevOrder,
        customizationFields: {
          ...prevOrder.customizationFields,
          [fieldIds.color]: color,
        },
      }));
    },
    [setPendingOrder],
  );

  return (
    <CheckoutWrapper
      currentStep={5}
      title="pick text color"
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'selectionnerCouleurDuBande',
      }}
      className="justify-center align-center"
    >
      <GradientPicker setHexColor={handleColorSetting} />

      {pendingOrder.customizationFields[fieldIds.color]}
    </CheckoutWrapper>
  );
}
