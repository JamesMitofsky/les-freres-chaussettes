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
        customizationFields: [
          { fieldId: fieldIds.number, value: '' },
          { fieldId: fieldIds.name, value: '' },
          { fieldId: fieldIds.color, value: '#00000' },
          { fieldId: fieldIds.bandColor, value: '#fffff' },
          { fieldId: fieldIds.image, value: '' },
        ],
      },
    });

  // console.log(pendingOrder)

  const updatePlayerName = (e: React.FormEvent<HTMLDivElement>) => {
    const { textContent } = e.target as HTMLDivElement;

    setPendingOrder((prevOrder) => {
      const newCustomizationFields = prevOrder.customizationFields.map(
        (field) =>
          field.fieldId === fieldIds.name
            ? {
                ...field,
                value: textContent !== null ? textContent : undefined,
              }
            : field,
      );

      return {
        ...prevOrder,
        customizationFields: newCustomizationFields,
      };
    });
  };
  const updatePlayerNumber = (e: React.FormEvent<HTMLDivElement>) => {
    const { textContent } = e.target as HTMLDivElement;

    setPendingOrder((prevOrder) => {
      const newCustomizationFields = prevOrder.customizationFields.map(
        (field) =>
          field.fieldId === fieldIds.number
            ? {
                ...field,
                value: textContent !== null ? textContent : undefined,
              }
            : field,
      );

      return {
        ...prevOrder,
        customizationFields: newCustomizationFields,
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

  return (
    <CheckoutWrapper
      customHeader={
        <MiniPrevisualization
          name={
            pendingOrder.customizationFields.find(
              (field) => field.fieldId === fieldIds.name,
            )?.value
          }
          number={
            pendingOrder.customizationFields.find(
              (field) => field.fieldId === fieldIds.number,
            )?.value
          }
        />
      }
      primaryButton={{
        label: 'Continuer',
        relativePathToNextPage: 'selectionnerCouleur',
      }}
      useSportsFont
    >
      <div className="flex h-full flex-col items-center justify-center gap-10">
        {form.getValues().includeNumber && (
          <div
            contentEditable="true"
            className={`w-full border-b px-3 text-center text-9xl text-gray-700 focus:outline-none ${styles.customInput}`}
            data-placeholder={playerPlaceholder.number}
            onInput={updatePlayerNumber}
            suppressContentEditableWarning
          >
            {
              pendingOrder.customizationFields.find(
                (field) => field.fieldId === fieldIds.number,
              )?.value
            }
          </div>
        )}
        {form.getValues().includeName && (
          <div
            contentEditable="true"
            className={`w-full border-b px-3 text-center text-7xl text-gray-700 focus:outline-none ${styles.customInput}`}
            data-placeholder={playerPlaceholder.name}
            onInput={updatePlayerName}
            suppressContentEditableWarning
          >
            {
              pendingOrder.customizationFields.find(
                (field) => field.fieldId === fieldIds.name,
              )?.value
            }
          </div>
        )}
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <SwitchForm form={form} />
      </div>
    </CheckoutWrapper>
  );
}
