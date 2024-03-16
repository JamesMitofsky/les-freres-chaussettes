import Image from 'next/image';
import PlayerInfo from './PlayerInfo';



type MiniPrevisualizationProps = {
  name: string | undefined;
  number: string | undefined;
};
function MiniPrevisualization({name, number}: MiniPrevisualizationProps ) {
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
      <PlayerInfo name={name} number={number} />
    </div>
  );
}

export default MiniPrevisualization;
