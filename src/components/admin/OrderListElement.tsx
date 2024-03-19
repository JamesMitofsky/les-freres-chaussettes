import Order from "@/types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { computeNumberOfPairs } from "@/utils/computeNumberOfPairs";

export const OrderListElement: React.FC<{ order: Order }> = ({ order }) => {
    const numberOfPairs = computeNumberOfPairs(order);
    console.log(numberOfPairs)
    return (
        <div className="flex justify-stretch rounded border border-gray-500 p-3">
            <div className="left-side flex-1">
                <div className="id-and-status flex gap-1">
                    <p className="text-xl font-bold">Commande #{order.id}</p>
                    <OrderStatusBadge orderStatus={order.orderStatus} />
                </div>
                <div>
                    <p>Prix total : {order.totalPrice / 100}€ | Prix livraison : {order.shippingCost / 100}€</p>
                    {order.customer && <p>{order.customer.name}</p>}
                    {order.customer && <p>{order.customer.shippingDetails?.address}</p>}
                    {order.customer && <p>{order.customer.shippingDetails?.address_second_line}</p>}
                    {order.customer && <p>{order.customer.shippingDetails?.zipCode} {order.customer.shippingDetails?.city} {order.customer.shippingDetails?.country}</p>}
                </div>
            </div>
            <div className="right-size">
                <div className="flex flex-col">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.email}</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.phone}</span>
                    {numberOfPairs.map(pair => {
                        return(
                            <p>{pair.base.size} : {pair.quantity}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};