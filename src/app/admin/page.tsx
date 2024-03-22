'use client'

import { useQuery, gql } from "@apollo/client";
import { OrderStatus } from "@/types/orderStatus";
import { useState } from "react";
import { OrderListElement } from "@/components/admin/OrderListElement";
import Order from "@/types/order";
import { BackSockPreviewInput } from "@/components/shared/BackSockPreview";
import { ToolBar } from "@/components/admin/ToolBar";

const ORDERS = gql`
query($filters: [OrderStatus!]!){
  orders(filters: $filters) {
    id
    createdDate
    orderStatus
    totalPrice
    shippingCost
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
`

export default function Admin() {
  const [filters, setFilters] = useState(["TO_PRODUCE", "IN_PRODUCTION", "SHIPPED"]);
  const { loading, error, data, refetch } = useQuery(ORDERS, { variables: { filters } });

  const [selectedOrders, setSelectedOrders] = useState<Order[]>([]);
  if (loading) return <>Chargement des commandes en cours</>
  if (error) return <>Une erreur s'est produite lors du chargement des données</>
  if (data) {
    console.log(selectedOrders)
    return (
      <div className="container xl mx-auto">
        <ToolBar selectedOrders={selectedOrders} refetch={refetch}/>
        {/* Orders wrapper */}
        <div className="flex flex-col gap-4">
          {data.orders.map((order: Order) => {
            return (
              <OrderListElement order={order} key={order.id} selectedOrders={selectedOrders} setSelectedOrders={setSelectedOrders} />
            )
          })}
        </div>
      </div>
    )
  }
}
