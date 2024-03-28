import Image from 'next/image';
import useLocalStorageState from 'use-local-storage-state';

import { playerObject } from '@/globals/defaultPlayer';
import fieldIds from '@/globals/fieldIds';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';

import PlayerInfo from './PlayerInfo';

function MiniPrevisualization() {
  const [pendingOrder] = useLocalStorageState<CustomizedPairOfSocks>(
    pendingOrderKey,
    {
      defaultValue: playerObject,
    },
  );

  const { customizationValues } = pendingOrder;

  return (
    <div className="flex w-full justify-between px-5">
      <Image
        src={
          customizationValues.find((v) => v.field.id === fieldIds.image)
            ?.value || ''
        }
        alt="Votre marque de chaussettes"
        className="object-contain"
        width={50}
        height={50}
      />
      <PlayerInfo />
    </div>
  );
}

export default MiniPrevisualization;
