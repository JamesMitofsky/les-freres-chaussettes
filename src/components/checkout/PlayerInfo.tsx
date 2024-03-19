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

// I updated the types to unified it between front & back
// I added customizationValue which is a value of a customizationField
// For example, customizationField number is {id : 1, type:"Digits" name:"Number"}
// And customizationValue for a number on a order should be {id:234,fieldId:1, value:"23"}
// Then you need to change the way you init your pending order
// Check on types folder the types I added and edited

function PlayerInfo() {
  const [pendingOrder] = useLocalStorageState<CustomizedPairOfSocks>(
    pendingOrderKey,
    {
      defaultValue: playerObject,
    },
  );
  const { customizationValues } = pendingOrder;
  const { color: colorId, name: nameId, number: numberId } = fieldIds;

  return (
    <div
      style={{ color: customizationValues[colorId].value }}
      className={`flex flex-col items-center justify-center ${sportsFont.className}`}
    >
      <div className="w-min text-3xl">{customizationValues[numberId].value}</div>

      <div>{customizationValues[nameId].value}</div>
    </div>
  );
}

export default PlayerInfo;
