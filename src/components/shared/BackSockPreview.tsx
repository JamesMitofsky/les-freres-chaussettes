import { sockPrintDimensions } from "@/globals/sockPrintDimensions";
import localFont from "next/font/local";
import { MutableRefObject, forwardRef } from "react";

const sportsFont = localFont({
    src: '../../../public/fonts/OctinSportsHv.otf',
    display: 'swap',
});

export interface BackSockPreviewInput {
    bandsColor: string
    playerNumber: string
    playerName: string
    textColor: string
}

const BackSockPreview: React.ForwardRefRenderFunction<HTMLDivElement, { data: BackSockPreviewInput }> = ({ data }) => {
    return (
        <div className="flex flex-col items-center gap-3" style={sockPrintDimensions}
        >
            <div className="band1"
                style={{
                    width: 47,
                    height: 68,
                    backgroundColor: data.bandsColor
                }}
            ></div>
            <div className={`number-name flex flex-col items-center justify-center ${sportsFont.className}`}
                style={{
                    color: data.textColor
                }}
            >
                <p style={{
                    fontSize: "112px",
                    lineHeight: '98px'
                }}>{data.playerNumber}</p>
                <p style={{
                    fontSize: "50px",
                    lineHeight: '55px'
                }}>{data.playerName}</p>
            </div>
            <div className="band2"
                style={{
                    width: 47,
                    height: 68,
                    backgroundColor: data.bandsColor
                }}
            ></div>
            <div className="band3"
                style={{
                    width: 47,
                    height: 45,
                    backgroundColor: data.bandsColor
                }}></div>
            <div className="band4"
                style={{
                    width: 47,
                    height: 30,
                    backgroundColor: data.bandsColor
                }}></div>
        </div>
    )
}

export default forwardRef<HTMLDivElement, { data: BackSockPreviewInput }>(BackSockPreview);