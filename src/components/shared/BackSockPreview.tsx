import localFont from 'next/font/local';

const sportsFont = localFont({
  src: '../../../public/fonts/OctinSportsHv.otf',
  display: 'swap',
});

export interface BackSockPreviewProps {
  bandsColor: string;
  playerNumber: string;
  playerName: string;
  textColor: string;
}

const BackSockPreview = ({
  bandsColor,
  playerNumber,
  playerName,
  textColor,
}: BackSockPreviewProps) => (
  <div className="flex flex-col items-center gap-3">
    <div
      style={{
        backgroundColor: bandsColor,
      }}
      className="h-16 w-12"
    />
    <div
      className={`number-name flex flex-col items-center justify-center ${sportsFont.className}`}
      style={{
        color: textColor,
      }}
    >
      <p className="text-9xl">{playerNumber}</p>
      <p className="text-5xl">{playerName}</p>
    </div>
    <div
      className="h-16 w-12"
      style={{
        backgroundColor: bandsColor,
      }}
    />
    <div
      className="h-12 w-12"
      style={{
        backgroundColor: bandsColor,
      }}
    />
    <div
      className="h-8 w-12"
      style={{
        backgroundColor: bandsColor,
      }}
    />
  </div>
);

export default BackSockPreview;
