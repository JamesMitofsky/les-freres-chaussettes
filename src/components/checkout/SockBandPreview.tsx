import PlayerInfo from './PlayerInfo';

type SockBandPreviewProps = { color: string | undefined };

export default function SockBandPreview({ color }: SockBandPreviewProps) {
  return (
    <div className="flex w-min flex-col gap-4">
      <div className="h-16 w-16" style={{ backgroundColor: color }} />
      <div className="h-16 w-16" style={{ backgroundColor: color }} />
      <PlayerInfo />
      <div className="h-8 w-16" style={{ backgroundColor: color }} />
      <div className="h-6 w-16" style={{ backgroundColor: color }} />
    </div>
  );
}
