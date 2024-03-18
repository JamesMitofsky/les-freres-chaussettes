import { playerObject } from "@/globals/defaultPlayer";
import fieldIds from "@/globals/fieldIds";
import { pendingOrderKey } from "@/globals/localStorageKeys";
import playerPlaceholder from "@/globals/placeholderPlayer";
import CustomizedPairOfSocks from "@/types/customizedPairOfSocks";
import useLocalStorageState from "use-local-storage-state";

export type Player =  {
  name?: string;
  number?: string;
}

type MiniPrevisualizationProps = {
  name?: string;
  number?: string;
};


function PlayerInfo({ name, number }: MiniPrevisualizationProps) {

  const playerNameExists = name !== undefined && name !== '';
  const playerNumberExists = number !== undefined && number !== '';

  const showName = true;
  const showNumber = true;

  const [pendingOrder] =
  useLocalStorageState<CustomizedPairOfSocks>(pendingOrderKey, {
    defaultValue: playerObject,
  });

  const { customizationFields } = pendingOrder;

  const { color: colorId } = fieldIds;

  return (
    <div style={{ color: customizationFields[colorId] }} className="flex flex-col justify-center items-center">
      {showNumber && <div className="w-min text-3xl">{playerNumberExists ? number : playerPlaceholder.number}</div>}
      {showName && <div>{playerNameExists ? name : playerPlaceholder.name}</div>}
    </div>
  );
}

export default PlayerInfo;
