'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import localFont from 'next/font/local';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import useLocalStorageState from 'use-local-storage-state';
import { z } from 'zod';

import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import SwitchForm from '@/components/checkout/CustomSwitchState';
import MiniPrevisualization from '@/components/checkout/MiniPrevisualization';
import fieldIds from '@/globals/fieldIds';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import playerPlaceholder from '@/globals/placeholderPlayer';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';

import { playerObject } from '../../../globals/defaultPlayer';
import styles from './Input.module.css';

const sportsFont = localFont({
  src: '../../../../public/fonts/OctinSportsHv.otf',
  display: 'swap',
});

const FormSchema = z.object({
  includeNumber: z.boolean().default(true).optional(),
  includeName: z.boolean().default(true).optional(),
});

export default function SelectNameAndNumber() {
  const [pendingOrder, setPendingOrder] =
    useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
      defaultValue: playerObject,
    });
  const { customizationValues } = pendingOrder;

  const { name: nameId, number: numberId } = fieldIds;

  const updateTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name: customizedFieldId } = e.target;

    setPendingOrder((prevOrder: CustomizedPairOfSocks) => {
      const newCustomiziationValues = prevOrder.customizationValues.slice();
      const indexOfChangingCustomizationValue =
        prevOrder.customizationValues.findIndex(
          (v) => v.field.id.toString() === customizedFieldId,
        );
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value !== null
        ? (newCustomiziationValues[indexOfChangingCustomizationValue].value =
            value)
        : (newCustomiziationValues[indexOfChangingCustomizationValue].value =
            '');
      return {
        ...prevOrder,
        newCustomiziationValues,
      };
    });
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      includeNumber: true,
      includeName: true,
    },
  });

  const { getValues } = form;
  return (
    <CheckoutWrapper
      currentStep={4}
      customHeader={<MiniPrevisualization />}
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'selectionnerCouleur',
      }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-10">
        {getValues().includeNumber && (
          <input
            type="text"
            className={`w-full border-b px-3 text-center text-9xl text-gray-700 focus:outline-none ${styles.customInput} ${sportsFont.className}`}
            placeholder={playerPlaceholder.number}
            name={numberId.toString()}
            value={
              customizationValues.find((v) => v.field.id === fieldIds.number)
                ?.value
            }
            onChange={updateTextInput}
          />
        )}
        {getValues().includeName && (
          <input
            type="text"
            className={`w-full border-b px-3 text-center text-5xl text-gray-700 focus:outline-none ${styles.customInput} ${sportsFont.className}`}
            placeholder={playerPlaceholder.name}
            name={nameId.toString()}
            value={
              customizationValues.find((v) => v.field.id === fieldIds.name)
                ?.value
            }
            onChange={updateTextInput}
          />
        )}
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <SwitchForm form={form} />
      </div>
    </CheckoutWrapper>
  );
}
