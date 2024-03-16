'use client';

import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import { z } from 'zod';
import useLocalStorageState from 'use-local-storage-state';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import fieldIds from '@/globals/fieldIds';
import SwitchForm from '@/components/checkout/CustomSwitchState';
import playerPlaceholder from '@/globals/placeholderPlayer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import MiniPrevisualization from '@/components/checkout/MiniPrevisualization';
import { ChangeEvent } from 'react';
import styles from './Input.module.css';

const FormSchema = z.object({
  includeNumber: z.boolean().default(true).optional(),
  includeName: z.boolean().default(true).optional(),
});

export default function SelectNameAndNumber() {
  // TODO: remove the test value from local storage
  const [pendingOrder, setPendingOrder] =
    useLocalStorageState<CustomizedPairOfSocks>('pendingOrder', {
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

  const updateTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setPendingOrder((prevOrder) => ({
      ...prevOrder,
      customizationFields: {
        ...prevOrder.customizationFields,
        [name]: value !== null ? value : '',
      },
    }));
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
      customHeader={
        <MiniPrevisualization
          number={pendingOrder.customizationFields[fieldIds.number]}
          showNumber={getValues().includeNumber ?? true}
          name={pendingOrder.customizationFields[fieldIds.name]}
          showName={getValues().includeName ?? true}
        />
      }
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'selectionnerCouleur',
      }}
      useSportsFont
    >
      <div className="flex h-full flex-col items-center justify-center gap-10">
        {getValues().includeNumber && (
          <input
            type="text"
            className={`w-full border-b px-3 text-center text-9xl text-gray-700 focus:outline-none ${styles.customInput}`}
            placeholder={playerPlaceholder.number}
            name={fieldIds.number.toString()}
            value={pendingOrder.customizationFields[fieldIds.number]}
            onChange={updateTextInput}
          />
          )}
        {getValues().includeName && (
          <input
            type="text"
            className={`w-full border-b px-3 text-center text-6xl text-gray-700 focus:outline-none ${styles.customInput}`}
            placeholder={playerPlaceholder.name}
            name={fieldIds.name.toString()}
            value={pendingOrder.customizationFields[fieldIds.name]}
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
