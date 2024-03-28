import localFont from 'next/font/local';
import useLocalStorageState from 'use-local-storage-state';

import { playerObject } from '@/globals/defaultPlayer';
import fieldIds from '@/globals/fieldIds';
import { pendingOrderKey } from '@/globals/localStorageKeys';
import CustomizedPairOfSocks from '@/types/customizedPairOfSocks';

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
  const { customizationValues } = pendingOrder;

  return (
    <div
      style={{
        color:
          customizationValues.find((v) => v.field.id === fieldIds.color)
            ?.value || 'black',
      }}
      className={`flex flex-col items-center justify-center ${sportsFont.className}`}
    >
      <div className="w-min text-3xl">
        {customizationValues.find((v) => v.field.id === fieldIds.number)?.value}
      </div>

      <div>
        {customizationValues.find((v) => v.field.id === fieldIds.name)?.value}
      </div>
    </div>
  );
}

export default PlayerInfo;
