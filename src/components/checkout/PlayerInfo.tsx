import { playerObject } from '@/globals/defaultPlayer';
import fieldIds from '@/globals/fieldIds';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';
import useLocalStorageState from 'use-local-storage-state';
import localFont from 'next/font/local';

export type Player = {
  name?: string;
  number?: string;
};

const sportsFont = localFont({
  src: '../../../public/fonts/OctinSportsHv.otf',
  display: 'swap',
});

function PlayerInfo() {
  const [pendingOrder] = useLocalStorageState<CustomizedPairOfSocks>(
    pendingOrderKey,
    {
      defaultValue: playerObject,
    },
  );
  const { customizationFields } = pendingOrder;
  const { color: colorId, name: nameId, number: numberId } = fieldIds;

  return (
    <div
      style={{ color: customizationFields[colorId] }}
      className={`flex flex-col items-center justify-center ${sportsFont.className}`}
    >
      <div className="w-min text-3xl">{customizationFields[numberId]}</div>

      <div>{customizationFields[nameId]}</div>
    </div>
  );
}

export default PlayerInfo;
