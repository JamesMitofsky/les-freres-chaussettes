import localFont from 'next/font/local';

import { sockPrintDimensions } from '@/globals/sockPrintDimensions';

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
  <div className="flex flex-col items-center gap-3" style={sockPrintDimensions}>
    <div
      style={{
        width: 47,
        height: 68,
        backgroundColor: bandsColor,
      }}
    />
    <div
      className={`number-name flex flex-col items-center justify-center ${sportsFont.className}`}
      style={{
        color: textColor,
      }}
    >
      <p
        style={{
          fontSize: '112px',
          lineHeight: '98px',
        }}
      >
        {playerNumber}
      </p>
      <p
        style={{
          fontSize: '50px',
          lineHeight: '55px',
        }}
      >
        {playerName}
      </p>
    </div>
    <div
      style={{
        width: 47,
        height: 68,
        backgroundColor: bandsColor,
      }}
    />
    <div
      style={{
        width: 47,
        height: 45,
        backgroundColor: bandsColor,
      }}
    />
    <div
      style={{
        width: 47,
        height: 30,
        backgroundColor: bandsColor,
      }}
    />
  </div>
);

export default BackSockPreview;
