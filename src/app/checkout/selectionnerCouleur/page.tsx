'use client';

import { AllowedColors, GradientPicker } from '@/components/GradientPicker';
import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { useCallback } from 'react';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import useLocalStorageState from 'use-local-storage-state';
import fieldIds from '@/globals/fieldIds';
import { playerObject } from '@/globals/defaultPlayer';
import MiniPrevisualization from '@/components/checkout/MiniPrevisualization';
import BackSockPreview from '@/components/shared/BackSockPreview';

export default function SelectColor() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pendingOrder, setPendingOrder] =
    useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
      defaultValue: playerObject,
    });

  const handleColorSetting = useCallback(
    (color: AllowedColors) => {
      setPendingOrder((prevOrder) => {
        const newCustomiziationValues = prevOrder.customizationValues.slice();
        const indexOfChangingCustomizationValue = prevOrder.customizationValues.findIndex(v => v.field.id === fieldIds.color);
        newCustomiziationValues[indexOfChangingCustomizationValue].value = color;
        return ({
          ...prevOrder,
          newCustomiziationValues
        })
      });
    },
    [setPendingOrder],
  );

  return (
    <CheckoutWrapper
      currentStep={5}
      customHeader={<MiniPrevisualization />}
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'selectionnerCouleurDuBande',
      }}
      className="items-center justify-around"
    >
      <BackSockPreview data={{
        bandsColor: pendingOrder.customizationValues.find(v => v.field.id === fieldIds.bandColor)?.value || "black",
        textColor: pendingOrder.customizationValues.find(v => v.field.id === fieldIds.color)?.value || "black",
        playerNumber: pendingOrder.customizationValues.find(v => v.field.id === fieldIds.number)?.value || "10",
        playerName: pendingOrder.customizationValues.find(v => v.field.id === fieldIds.name)?.value || "Joueur"
      }} />
      <GradientPicker setHexColor={handleColorSetting} />
    </CheckoutWrapper>
  );
}
