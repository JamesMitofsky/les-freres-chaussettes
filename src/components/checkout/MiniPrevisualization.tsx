import Image from 'next/image';
import PlayerInfo from './PlayerInfo';



type MiniPrevisualizationProps = {
  name: string | undefined;
  number: string | undefined;
  showName: boolean;
  showNumber: boolean;
};
function MiniPrevisualization({name, number, showName, showNumber}: MiniPrevisualizationProps ) {
  // todo - fetch the user-selected logo
  const imageSrc = '/images/example-logo.png';

  return (
    <div className="flex w-full justify-between px-5">
      <Image
        src={imageSrc}
        alt="Votre marque de chaussettes"
        className="object-contain"
        width={50}
        height={50}
      />
      <PlayerInfo showName={showName} name={name} showNumber={showNumber} number={number} />
    </div>
  );
}

export default MiniPrevisualization;
