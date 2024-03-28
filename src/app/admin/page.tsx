'use client';

import { gql,useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { OrderListElement } from '@/components/admin/OrderListElement';
import { ToolBar } from '@/components/admin/ToolBar';
import { Loader } from '@/components/ui/Loader';
import Order from '@/types/order';

const ORDERS = gql`
  query ($filters: [OrderStatus!]!) {
    orders(filters: $filters) {
      id
      createdDate
      orderStatus
      totalPrice
      comment
      shippingCost
      laPoste {
        suivi
      }
      customer {
        name
        email
        phone
        shippingDetails {
          address
          address_second_line
          zipCode
          city
          country
        }
      }
      products {
        id
        quantity
        base {
          id
          size
        }
        customizationValues {
          id
          field {
            id
            name
            type
          }
          value
        }
      }
    }
  }
`;

export default function Admin() {
  const [filters, setFilters] = useState(['TO_PRODUCE', 'IN_PRODUCTION']);
  const { loading, error, data, refetch } = useQuery(ORDERS, {
    variables: { filters },
  });
  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Si les filtres ont été modifiés par l'utilisateur, alors seulement refetch
    if (!loading) {
      refetch();
    }
  }, [filters, loading, refetch]);

  if (loading)
    return (
      <div className="xl container mx-auto">
        <ToolBar
          selectedOrders={selectedOrders}
          refetch={refetch}
          filters={filters}
          setFilters={setFilters}
        />
        <Loader />
      </div>
    );
  if (error)
    return <>Une erreur s'est produite lors du chargement des données</>;
  if (data) {
    return (
      <div className="xl container mx-auto">
        <ToolBar
          selectedOrders={selectedOrders}
          refetch={refetch}
          filters={filters}
          setFilters={setFilters}
        />
        {/* Orders wrapper */}
        {!loading && (
          <div className="flex flex-col gap-4">
            {data.orders.map((order: Order) => (
              <OrderListElement
                order={order}
                key={order.id}
                selectedOrders={selectedOrders}
                setSelectedOrders={setSelectedOrders}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
