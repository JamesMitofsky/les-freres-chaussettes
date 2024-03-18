'use client';

import { AllowedColors, GradientPicker } from '@/components/GradientPicker';
import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { useCallback } from 'react';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import useLocalStorageState from 'use-local-storage-state';
import fieldIds from '@/globals/fieldIds';
import { playerObject } from '@/globals/defaultPlayer';
import PlayerInfo from '@/components/checkout/PlayerInfo';

export default function SelectColor() {
  const { color: colorId } = fieldIds;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <PlayerInfo />
      <GradientPicker setHexColor={handleColorSetting} />
    </CheckoutWrapper>
  );
}
