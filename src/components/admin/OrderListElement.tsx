import Order from "@/types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { computeNumberOfPairs } from "@/utils/computeNumberOfPairs";
import 'moment/locale/fr';
import Moment from "react-moment"
import { SockPreview } from "./sockPreview";

export const OrderListElement: React.FC<{ order: Order }> = ({ order }) => {
    const numberOfPairs = computeNumberOfPairs(order);
    return (
        <div className="flex flex-col rounded border border-gray-500 p-3 divide-y">
            <div className="flex justify-stretch">
                <div className="left-side flex-1">
                    <div className="id-and-status flex gap-1">
                        <p className="text-xl font-bold">Commande #{order.id}</p>
                        <OrderStatusBadge orderStatus={order.orderStatus} />
                    </div>
                    <div>
                        <Moment date={order.createdDate} locale="fr" format="DD/MM/YYYY hh:mm" />
                        <p>Prix total : {order.totalPrice / 100}€ | Prix livraison : {order.shippingCost / 100}€</p>
                        {order.customer && <p>{order.customer.name}</p>}
                        {order.customer && <p>{order.customer.shippingDetails?.address}</p>}
                        {order.customer && <p>{order.customer.shippingDetails?.address_second_line}</p>}
                        {order.customer && <p>{order.customer.shippingDetails?.zipCode} {order.customer.shippingDetails?.city} {order.customer.shippingDetails?.country}</p>}
                    </div>
                </div>

                <div className="right-side">
                    <div className="flex flex-col">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.email}</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.phone}</span>
                        {numberOfPairs.map(pair => {
                            return (
                                <p><span className="font-semibold">{pair.base.size}</span> : x{pair.quantity}</p>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="under-side py-2">
                {order.products.map(product => <SockPreview product={product} key={product.id}/>)}
            </div>
        </div>
    )
};