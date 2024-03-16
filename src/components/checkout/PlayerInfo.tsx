import playerPlaceholder from "@/globals/placeholderPlayer";

export type Player =  {
  name?: string;
  number?: string;
}

type MiniPrevisualizationProps = {
  name: string | undefined;
  number: string | undefined;
  showName: boolean;
  showNumber: boolean;
};


function PlayerInfo({ name, number, showName, showNumber}: MiniPrevisualizationProps) {

  const playerNameExists = name !== undefined && name !== '';
  const playerNumberExists = number !== undefined && number !== '';

  return (
    <div className="flex flex-col justify-center items-center">
      {showNumber && <div className="w-min text-3xl">{playerNumberExists ? number : playerPlaceholder.number}</div>}
      {showName && <div>{playerNameExists ? name : playerPlaceholder.name}</div>}
    </div>
  );
}

export default PlayerInfo;
