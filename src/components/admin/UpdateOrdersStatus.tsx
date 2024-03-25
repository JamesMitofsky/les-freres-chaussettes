/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-key */
import Order from "@/types/order";
import { OrderStatus } from "@/types/orderStatus";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Loader } from "../ui/Loader";

const UPDATE_ORDERS_STATUS = gql`
    mutation($newStatus: OrderStatus!, $ids: [String!]!){
        updateOrdersStatus(newStatus: $newStatus, ids: $ids) {
            id
        }
    }
`

export const UpdateOrdersStatus: React.FC<{ selectedOrders: Order[], refetch: any }> = ({ selectedOrders, refetch }) => {
    const [newStatus, setNewStatus] = useState<string | null>()
    const [updateOrdersStatus, { loading }] = useMutation(UPDATE_ORDERS_STATUS);

    const handleSelectStatus = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewStatus(e.target.value)
        updateOrdersStatus({
            variables: {
                newStatus: e.target.value,
                ids: selectedOrders.map(o => o.id.toString())
            },
            onCompleted: () => { setNewStatus(null); refetch() }
        })
    }

    return (
        <div className="mt-3">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mettre à jour le status des commandes sélectionnées</label>
            {loading && <Loader />}
            {!loading && <select disabled={selectedOrders.length === 0} onChange={handleSelectStatus} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Sélectionner un statut</option>
                {Object.keys(OrderStatus).map(key => (
                    <option value={key} selected={key === newStatus}>{OrderStatus[key as keyof typeof OrderStatus]}</option>
                ))}
            </select>}
        </div>
    )
}