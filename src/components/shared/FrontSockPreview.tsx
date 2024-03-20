import { sockPrintDimensions } from "@/globals/sockPrintDimensions";
import localFont from "next/font/local";
import { MutableRefObject, forwardRef } from "react";

const sportsFont = localFont({
    src: '../../../public/fonts/OctinSportsHv.otf',
    display: 'swap',
});

export interface FrontSockPreviewInput {
    logo_url: string
}

const FrontSockPreview: React.ForwardRefRenderFunction<HTMLDivElement, { data: FrontSockPreviewInput }> = ({ data }) => {
    return (
        <div className="flex flex-col items-center gap-3" style={sockPrintDimensions}>
            <img style={{top:"8cm",position:"relative", width:"5.5cm"}} src={data.logo_url} className="aspect-square object-scale-down"/>
        </div>
    )
}

export default forwardRef<HTMLDivElement, { data: FrontSockPreviewInput }>(FrontSockPreview);