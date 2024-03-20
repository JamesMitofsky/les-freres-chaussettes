'use client'

import { useQuery, gql } from "@apollo/client";
import { OrderStatus } from "@/types/orderStatus";
import { useState } from "react";
import { OrderListElement } from "@/components/admin/OrderListElement";
import Order from "@/types/order";
import { BackSockPreviewInput } from "@/components/shared/BackSockPreview";

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
  const [filters, setFilters] = useState(["TO_PRODUCE"]);
  const { loading, error, data } = useQuery(ORDERS, { variables: { filters } });
  if (loading) return <>Chargement des commandes en cours</>
  if (error) return <>Une erreur s'est produite lors du chargement des données</>
  if (data) {
    return (
      <div className="container xl mx-auto">
        <div className="container">CHOIX DES FILTRES ICI</div>
        {/* Orders wrapper */}
        <div className="container flex flex-col gap-4">
          {data.orders.map((order: Order) => {
            return (
              <OrderListElement order={order} key={order.id} />
            )
          })}
        </div>
      </div>
    )
  }
}
