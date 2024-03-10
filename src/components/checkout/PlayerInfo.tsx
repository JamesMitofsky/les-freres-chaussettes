import playerPlaceholder from "@/globals/placeholderPlayer";

export type Player =  {
  name?: string;
  number?: string;
}

type MiniPrevisualizationProps = {
  name: string | undefined;
  number: string | undefined;
};


function PlayerInfo({ name, number}: MiniPrevisualizationProps) {

  const playerNameExists = name !== undefined && name !== '';
  const playerNumberExists = number !== undefined && number !== '';

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-min text-3xl">{playerNumberExists ? number : playerPlaceholder.number}</div>
      <div>{playerNameExists ? name : playerPlaceholder.name}</div>
    </div>
  );
}

export default PlayerInfo;
