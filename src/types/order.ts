import CartProduct from './carteProduct';
import Customer from './customer';

type Order = {
  products: CartProduct[];
  customer: Customer;
};

export default Order;
