type Name = {
  first: string;
  last: string;
};

type ShippingDetails = {
  address: string;
  address_second_line?: string;
  city: string;
  zipCode: string;
  country: string;
};

type Customer = {
  name: Name;
  shippingDetails: ShippingDetails;
  email: string;
  phone: string;
};

export default Customer;
