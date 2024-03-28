'use client';

import { useCallback } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import MiniPrevisualization from '@/components/checkout/MiniPrevisualization';
import { AllowedColors, GradientPicker } from '@/components/GradientPicker';
import BackSockPreview from '@/components/shared/BackSockPreview';
import { playerObject } from '@/globals/defaultPlayer';
import fieldIds from '@/globals/fieldIds';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';

export default function SelectBandColor() {
  const [pendingOrder, setPendingOrder] =
    useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
      defaultValue: playerObject,
    });

  const handleColorSetting = useCallback(
    (color: AllowedColors) => {
      setPendingOrder((prevOrder) => {
        const newCustomiziationValues = prevOrder.customizationValues.slice();
        const indexOfChangingCustomizationValue =
          prevOrder.customizationValues.findIndex(
            (v) => v.field.id === fieldIds.bandColor,
          );
        newCustomiziationValues[indexOfChangingCustomizationValue].value =
          color;
        return {
          ...prevOrder,
          newCustomiziationValues,
        };
      });
    },
    [setPendingOrder],
  );

  const bandsColor =
    pendingOrder.customizationValues.find(
      (v) => v.field.id === fieldIds.bandColor,
    )?.value || 'black';

  const textColor =
    pendingOrder.customizationValues.find((v) => v.field.id === fieldIds.color)
      ?.value || 'black';

  const playerNumber =
    pendingOrder.customizationValues.find((v) => v.field.id === fieldIds.number)
      ?.value || '10';

  const playerName =
    pendingOrder.customizationValues.find((v) => v.field.id === fieldIds.name)
      ?.value || 'Joueur';

  return (
    <CheckoutWrapper
      currentStep={5}
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'quelleTaille',
      }}
      title="Sélectionner la couleur des bandes"
      customHeader={<MiniPrevisualization />}
      className="items-center justify-around"
    >
      <BackSockPreview
        bandsColor={bandsColor}
        textColor={textColor}
        playerNumber={playerNumber}
        playerName={playerName}
      />
      <GradientPicker setHexColor={handleColorSetting} />
    </CheckoutWrapper>
  );
}
