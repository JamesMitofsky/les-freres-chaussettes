import localFont from 'next/font/local';
import { forwardRef } from 'react';

import { sockPrintDimensions } from '@/globals/sockPrintDimensions';

const sportsFont = localFont({
  src: '../../../public/fonts/OctinSportsHv.otf',
  display: 'swap',
});

export interface BackSockPreviewInput {
  bandsColor: string;
  playerNumber: string;
  playerName: string;
  textColor: string;
}

const BackSockPreview: React.ForwardRefRenderFunction<
  HTMLDivElement,
  { data: BackSockPreviewInput }
> = ({ data }) => (
  <div className="flex flex-col items-center gap-3" style={sockPrintDimensions}>
    <div
      style={{
        width: 47,
        height: 68,
        backgroundColor: data.bandsColor,
      }}
    />
    <div
      className={`number-name flex flex-col items-center justify-center ${sportsFont.className}`}
      style={{
        color: data.textColor,
      }}
    >
      <p
        style={{
          fontSize: '112px',
          lineHeight: '98px',
        }}
      >
        {data.playerNumber}
      </p>
      <p
        style={{
          fontSize: '50px',
          lineHeight: '55px',
        }}
      >
        {data.playerName}
      </p>
    </div>
    <div
      style={{
        width: 47,
        height: 68,
        backgroundColor: data.bandsColor,
      }}
    />
    <div
      style={{
        width: 47,
        height: 45,
        backgroundColor: data.bandsColor,
      }}
    />
    <div
      style={{
        width: 47,
        height: 30,
        backgroundColor: data.bandsColor,
      }}
    />
  </div>
);

export default forwardRef<HTMLDivElement, { data: BackSockPreviewInput }>(
  BackSockPreview,
);
