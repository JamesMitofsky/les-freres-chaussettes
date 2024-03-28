import ShippingDetails from './shippingDetails';

type Customer = {
  id: number;
  name: string;
  shippingDetails?: ShippingDetails;
  email: string;
  phone: string;
};

export default Customer;
