import fieldIds from '@/globals/fieldIds';
import CartProduct from '@/types/customizedPairOfSocks';
import localFont from 'next/font/local';

const sportsFont = localFont({
    src: '../../../public/fonts/OctinSportsHv.otf',
    display: 'swap',
});

export const SockPreview: React.FC<{ product: CartProduct }> = ({ product }) => {
    // TODO : If we add other products, we must switch on product id to adapt style and way to display
    console.log(product.customizationValues)
    const color: string = product.customizationValues.find(element => element.field.id == fieldIds.color)?.value || "black";
    const number: string = product.customizationValues.find(element => element.field.id == fieldIds.number)?.value || "";
    const name: string = product.customizationValues.find(element => element.field.id == fieldIds.name)?.value || "";
    const bandColor: string = product.customizationValues.find(element => element.field.id == fieldIds.bandColor)?.value || "black";
    return (
        <div>
            <div><p className='font-semibold'>{product.quantity}x {product.base.size}</p></div>
            <div className='flex items-center p-1 border gap-10'>
                <div
                    style={{ backgroundColor: bandColor }}
                    className={`w-10 h-5`}
                ></div>
                <div
                    style={{ color }}
                    className={`flex flex-col items-center justify-center ${sportsFont.className}`}
                >
                    <div className="w-min text-3xl">{number}</div>
                    <div>{name}</div>
                </div>
            </div>
        </div>
    )
}
