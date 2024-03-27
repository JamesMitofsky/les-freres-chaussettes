import Order from "@/types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { computeNumberOfPairs } from "@/utils/computeNumberOfPairs";
import 'moment/locale/fr';
import Moment from "react-moment"
import { SockSmallPreviewAndPrint } from "./SockSmallPreviewAndPrint";
import { useRef } from "react";
import Link from "next/link";
import { Comment } from "../ui/comment";

export const OrderListElement: React.FC<{
    order: Order,
    selectedOrders: Order[],
    setSelectedOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}> = ({ order, selectedOrders, setSelectedOrders }) => {
    // const refToPrint = useRef<HTMLDivElement>(null);
    const numberOfPairs = computeNumberOfPairs(order);

    const handleSelectOrder = (isChecked: boolean) => {
        let orderIndex: number = -1;
        orderIndex = selectedOrders.findIndex(o => o.id === order.id);
        if (isChecked) {
            if (orderIndex == -1) {
                setSelectedOrders(prevSelectedOrders => [...prevSelectedOrders, order]);
            }
        } else {
            const updatedSelectedOrders = [...selectedOrders];
            updatedSelectedOrders.splice(orderIndex, 1);
            setSelectedOrders(updatedSelectedOrders);
        }
    };

    return (
        <div className="flex flex-col rounded border border-gray-500 p-3 divide-y">
            <div className="flex justify-stretch">
                <div className="left-side flex-1">
                    <div className="flex id-and-status flex gap-1 items-center">
                        <input onChange={(e) => handleSelectOrder(e.target.checked)} id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <Link href={`/admin/order/${order.id}`}><p className="text-xl font-bold">Commande #{order.id}</p></Link>
                        <OrderStatusBadge orderStatus={order.orderStatus} />
                    </div>
                    <div className="py-3">
                        <Moment date={order.createdDate} locale="fr" format="DD/MM/YYYY hh:mm" />
                        <p>Prix total : {order.totalPrice / 100}€ | Prix livraison : {order.shippingCost / 100}€</p>
                        {order.customer && <p>{order.customer.name}</p>}
                        {order.customer && <p>{order.customer.shippingDetails?.address}</p>}
                        {order.customer && <p>{order.customer.shippingDetails?.address_second_line}</p>}
                        {order.customer && <p>{order.customer.shippingDetails?.zipCode} {order.customer.shippingDetails?.city} {order.customer.shippingDetails?.country}</p>}
                        {order.comment.length > 0 && <Comment comment={order.comment} />}
                        {order.laPoste && <p>N° de suivi {order.laPoste.suivi}</p>}
                    </div>
                </div>

                <div className="right-side">
                    <div className="flex flex-col">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.email}</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.phone}</span>
                        {numberOfPairs.map(pair => (
                                <p><span className="font-semibold">{pair.base.size}</span> : x{pair.quantity}</p>
                            ))}
                    </div>
                </div>
            </div>

            <div className="under-side py-2 flex gap-5">
                {order.products.map(product => <SockSmallPreviewAndPrint product={product} key={product.id} />)}
            </div>
            {/* <div>
                <div style={{ display: "none" }}>
                    <div ref={refToPrint} style={{ transform: 'scaleX(-1)' }}>
                        {order.products.map(product => {
                            const color: string = product.customizationValues.find(element => element.field.id == fieldIds.color)?.value || "black";
                            const number: string = product.customizationValues.find(element => element.field.id == fieldIds.number)?.value || "";
                            const name: string = product.customizationValues.find(element => element.field.id == fieldIds.name)?.value || "";
                            const bandColor: string = product.customizationValues.find(element => element.field.id == fieldIds.bandColor)?.value || "black";
                            const logo: string = "https://assets-global.website-files.com/64bd0fd50a57a73047957f5c/64bd10b10fce1736305b6322_logo-swiv.png";

                            const toPrint = [];
                            for (let i = 0; i < product.quantity; i++) {
                                toPrint.push(<BackSockPreview data={{
                                    playerName: name,
                                    playerNumber: number,
                                    bandsColor: bandColor,
                                    textColor: color
                                }} />)
                                toPrint.push(<BackSockPreview data={{
                                    playerName: name,
                                    playerNumber: number,
                                    bandsColor: bandColor,
                                    textColor: color
                                }} />)
                            }
                            for (let i = 0; i < product.quantity; i++) {
                                toPrint.push(<FrontSockPreview data={{ logo_url: logo }} />)
                                toPrint.push(<FrontSockPreview data={{ logo_url: logo }} />)
                            }

                            return (
                                toPrint
                            )
                        })}
                    </div>
                </div>
            </div>
            <ReactToPrint
                bodyClass="print-agreement"
                content={() => refToPrint.current}
                trigger={() => (
                    <Button>
                        Imprimer
                    </Button>
                )} /> */}
        </div>
    )
};