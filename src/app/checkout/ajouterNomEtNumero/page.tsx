'use client';

import CheckoutWrapper from '@/components/checkout/CheckoutWrapper';
import MiniPrevisualization from '@/components/checkout/MiniPrevisualization';
import { useState } from 'react';
import { Player } from '@/components/checkout/PlayerInfo';
import SwitchForm from '@/components/checkout/CustomSwitchState';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './Input.module.css';

const playerPlaceholder: Player = {
  number: '10',
  name: 'Joueur',
};
const FormSchema = z.object({
  includeNumber: z.boolean().default(true).optional(),
  includeName: z.boolean().default(true).optional(),
});

export default function SelectNameAndNumber() {
  const [player, setPlayer] = useState<Player>({
    name: undefined,
    number: undefined,
  });

  const handleTextInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      name: target.textContent !== null ? target.textContent : undefined,
    }));
  };

  const handleNumberInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.textContent === null) return;

    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      number: target.textContent !== null ? target.textContent : undefined,
    }));
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
          player={player}
          playerPlaceholder={playerPlaceholder}
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
            onInput={handleNumberInput}
            suppressContentEditableWarning
          />
        )}
        {form.getValues().includeName && (
          <div
            contentEditable="true"
            className={`w-full border-b px-3 text-center text-7xl text-gray-700 focus:outline-none ${styles.customInput}`}
            data-placeholder={playerPlaceholder.name}
            onInput={handleTextInput}
            suppressContentEditableWarning
          />
        )}
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <SwitchForm form={form} />
      </div>
    </CheckoutWrapper>
  );
}
