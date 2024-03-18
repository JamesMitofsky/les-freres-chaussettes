import Image from 'next/image';
import { playerObject } from '@/globals/defaultPlayer';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import useLocalStorageState from 'use-local-storage-state';
import fieldIds from '@/globals/fieldIds';
import PlayerInfo from './PlayerInfo';

function MiniPrevisualization() {
  const [pendingOrder] =
  useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
    defaultValue: playerObject,
  });

  const { image: imageId, name: nameId, number: numberId } = fieldIds;

  const { customizationFields } = pendingOrder;

  return (
    <div className="flex w-full justify-between px-5">
      <Image
        src={customizationFields[imageId] || ''}
        alt="Votre marque de chaussettes"
        className="object-contain"
        width={50}
        height={50}
      />
      <PlayerInfo name={customizationFields[nameId]} number={customizationFields[numberId]} />
    </div>
  );
}

export default MiniPrevisualization;
