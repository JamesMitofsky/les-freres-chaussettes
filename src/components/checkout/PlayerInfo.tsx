import playerPlaceholder from "@/globals/placeholderPlayer";

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

  return (
    <div className="flex flex-col justify-center items-center">
      {showNumber && <div className="w-min text-3xl">{playerNumberExists ? number : playerPlaceholder.number}</div>}
      {showName && <div>{playerNameExists ? name : playerPlaceholder.name}</div>}
    </div>
  );
}

export default PlayerInfo;
