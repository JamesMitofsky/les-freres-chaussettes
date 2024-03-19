import { OrderStatus } from "@/types/orderStatus";

export const OrderStatusBadge: React.FC<{ orderStatus: OrderStatus }> = ({ orderStatus }) => {
    // Switch orderStatus value and change badge color
    return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {orderStatus}
        </span>
    )
}