import Image from 'next/image';
import PlayerInfo, { Player } from './PlayerInfo';



type MiniPrevisualizationProps = {
  player: Player;
  playerPlaceholder: Player;
};
function MiniPrevisualization({player, playerPlaceholder}: MiniPrevisualizationProps ) {
  const imageSrc = '/images/socks-back.jpeg';



  return (
    <div className="flex w-full justify-between px-5">
      <Image
        src={imageSrc}
        alt="Votre marque de chaussettes"
        className="object-contain"
        width={50}
        height={50}
      />
      <PlayerInfo player={player} playerPlaceholder={playerPlaceholder} />
    </div>
  );
}

export default MiniPrevisualization;
