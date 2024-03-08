export type Player =  {
  name?: string;
  number?: string;
}

type MiniPrevisualizationProps = {
  player: Player;
  playerPlaceholder: Player;
};


function PlayerInfo({ player, playerPlaceholder}: MiniPrevisualizationProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-min text-3xl">{player.number ?? playerPlaceholder.number}</div>
      <div>{player.name ?? playerPlaceholder.name}</div>
    </div>
  );
}

export default PlayerInfo;
