import Customer from './customer';
import CartProduct from './customizedPairOfSocks';
import { OrderStatus } from './orderStatus';


type Order =  {
    id: number
    totalPrice: number;
    shippingCost: number;
    products: CartProduct[]
    customer: Customer
    orderStatus: OrderStatus
    stripeSessionId: string
    createdDate: Date
    comment:string
}

export default Order;
