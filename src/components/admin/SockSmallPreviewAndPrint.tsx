import fieldIds from '@/globals/fieldIds';
import CartProduct from '@/types/customizedPairOfSocks';
import localFont from 'next/font/local';
import BackSockPreview from '../shared/BackSockPreview';
import ReactToPrint from "react-to-print"
import { useRef } from 'react';
import FrontSockPreview from '../shared/FrontSockPreview';
import { Button } from '../ui/button';

const sportsFont = localFont({
    src: '../../../public/fonts/OctinSportsHv.otf',
    display: 'swap',
});

export const SockSmallPreviewAndPrint: React.FC<{ product: CartProduct }> = ({ product }) => {
    // TODO : If we add other products, we must switch on product id to adapt style and way to display
    const refToPrint = useRef<HTMLDivElement>(null);

    const color: string = product.customizationValues.find(element => element.field.id == fieldIds.color)?.value || "black";
    const number: string = product.customizationValues.find(element => element.field.id == fieldIds.number)?.value || "";
    const name: string = product.customizationValues.find(element => element.field.id == fieldIds.name)?.value || "";
    const bandColor: string = product.customizationValues.find(element => element.field.id == fieldIds.bandColor)?.value || "black";
    const logo: string = "https://assets-global.website-files.com/64bd0fd50a57a73047957f5c/64bd10b10fce1736305b6322_logo-swiv.png";

    const toPrintComponent = []
    for (let i = 0; i < product.quantity; i++) {
        toPrintComponent.push(
            <BackSockPreview
                data={{
                    playerName: name,
                    playerNumber: number,
                    bandsColor: bandColor,
                    textColor: color
                }} />
        )
        toPrintComponent.push(
            <BackSockPreview
                data={{
                    playerName: name,
                    playerNumber: number,
                    bandsColor: bandColor,
                    textColor: color
                }} />
        )
    }
    for (let i = 0; i < product.quantity; i++) {
        toPrintComponent.push(
            <FrontSockPreview data={{ logo_url: logo }} />
        )
        toPrintComponent.push(
            <FrontSockPreview data={{ logo_url: logo }} />
        )
    }
    return (
        <div>
            <div><p className='font-semibold'>{product.quantity}x {product.base.size}</p></div>
            <div className='border rounded flex items-center'>
                <div className='flex flex-col items-center p-3 gap-3'>
                    <div
                        style={{ backgroundColor: bandColor }}
                        className={`w-8 h-6`}
                    ></div>
                    <div
                        style={{ color }}
                        className={`flex flex-col items-center justify-center ${sportsFont.className}`}
                    >
                        <div className="w-min text-5xl">{number}</div>
                        <div className="text-xl">{name}</div>
                    </div>
                    <div
                        style={{ backgroundColor: bandColor }}
                        className={`w-8 h-6`}
                    ></div>
                </div>

                <div>
                    <img className="aspect-square object-scale-down w-32" src={logo} />
                </div>
            </div>
            <div style={{ display: "none" }}>
                <div ref={refToPrint} style={{transform: 'scaleX(-1)'}}>
                    {toPrintComponent}
                </div>
            </div>
            <ReactToPrint
                bodyClass="print-agreement"
                content={() => refToPrint.current}
                trigger={() => (
                    <Button>
                        Imprimer
                    </Button>
                )} />
        </div>

    )
}
