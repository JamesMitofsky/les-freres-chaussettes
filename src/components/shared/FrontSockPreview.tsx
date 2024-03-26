import { sockPrintDimensions } from "@/globals/sockPrintDimensions";
import { forwardRef } from "react";


export interface FrontSockPreviewInput {
    logo_url: string
}

const FrontSockPreview: React.ForwardRefRenderFunction<HTMLDivElement, { data: FrontSockPreviewInput }> = ({ data }) => (
        <div className="flex flex-col items-center gap-3" style={sockPrintDimensions}>
            <img style={{top:"8cm",position:"relative", width:"5.5cm"}} src={data.logo_url} className="aspect-square object-scale-down"/>
        </div>
    )

export default forwardRef<HTMLDivElement, { data: FrontSockPreviewInput }>(FrontSockPreview);