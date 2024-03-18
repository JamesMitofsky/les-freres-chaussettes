import PlayerInfo from "./PlayerInfo";

type SockBandPreviewProps = { color: string | undefined };

export default function SockBandPreview({ color }: SockBandPreviewProps) {    
  return (
    <div className="flex flex-col w-min">
      <div
        className="mt-4 h-16 w-16"
        style={{ backgroundColor: color }}
      />
      <div
        className="mt-4 h-16 w-16"
        style={{ backgroundColor: color }}
      />
      <PlayerInfo />
      <div
        className="mt-4 h-8 w-16"
        style={{ backgroundColor: color }}
      />
      <div
        className="mt-4 h-6 w-16"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
