export type Player =  {
  name?: string;
  number?: string;
}

type MiniPrevisualizationProps = {
  player: Player;
  playerPlaceholder: Player;
};


function PlayerInfo({ player, playerPlaceholder}: MiniPrevisualizationProps) {

  const playerNameExists = player.name !== undefined && player.name !== '';
  const playerNumberExists = player.number !== undefined && player.number !== '';

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-min text-3xl">{playerNumberExists ? player.number : playerPlaceholder.number}</div>
      <div>{playerNameExists ? player.name : playerPlaceholder.name}</div>
    </div>
  );
}

export default PlayerInfo;
