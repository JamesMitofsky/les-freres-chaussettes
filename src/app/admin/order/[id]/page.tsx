'use client'
import { useEffect, useState } from "react"
import { OrderStatusBadge } from "@/components/admin/OrderStatusBadge"
import { Button } from "@/components/ui/button"
import Order from "@/types/order"
import { computeNumberOfPairs } from "@/utils/computeNumberOfPairs"
import { gql, useMutation, useQuery } from "@apollo/client"
import Moment from "react-moment"
import 'moment/locale/fr';
import { Loader } from "@/components/ui/Loader"

const ORDER = gql`
    query ($orderId: Float!) {
    order(id: $orderId) {
        id
        createdDate
        orderStatus
        totalPrice
        shippingCost
        comment
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
            name
            type
            }
            value
        }
        }
    }
    }
`

const COMMENT_ORDER = gql`
    mutation($comment: String!, $commentOrderId: Float!){
    commentOrder(comment: $comment, id: $commentOrderId) {
        comment
    }
    }
`

export default function Page({ params }: { params: { id: number } }) {
    const [comment, setComment] = useState("")
    const { data, loading, error, refetch } = useQuery(ORDER, {
        variables: { orderId: Number(params.id) }
    })
    const [commentOrder, commentOrderResponse] = useMutation(COMMENT_ORDER);
    useEffect(() => {
        if (data)
            setComment(data.order.comment)
    }, [data])

    if (loading) {
        return (
            <div className="container">
                <p>Chargement des données de la commande #{params.id}...</p>)
            </div>
        )
    } if (error) {
        return (
            <div className="container">
                <p>Erreur lors du chargement de la commande #{params.id}...</p>
            </div>
        )
    }
    if (data) {
        let order: Order = data.order;
        const numberOfPairs = computeNumberOfPairs(order);
        const handleSubmitComment = () => {
            commentOrder({
                variables: {
                    commentOrderId: order.id,
                    comment
                },
                onCompleted: (data) => {setComment(data.commentOrder.comment)}
            })
        }

        return (
            <div className="container border rounded border-gray-300 p-3 divide-y">
                <div className="flex justify-stretch">
                    <div className="left-side flex-1">
                        <div className="flex id-and-status flex gap-1 items-center">
                            <p className="text-xl font-bold">Commande #{order.id}</p>
                            <OrderStatusBadge orderStatus={order.orderStatus} />
                        </div>
                        <div>
                            <Moment date={order.createdDate} locale="fr" format="DD/MM/YYYY hh:mm" />
                            <p>Prix total : {order.totalPrice / 100}€ | Prix livraison : {order.shippingCost / 100}€</p>
                            {order.customer && <p>{order.customer.name}</p>}
                            {order.customer && <p>{order.customer.shippingDetails?.address}</p>}
                            {order.customer && <p>{order.customer.shippingDetails?.address_second_line}</p>}
                            {order.customer && <p>{order.customer.shippingDetails?.zipCode} {order.customer.shippingDetails?.city} {order.customer.shippingDetails?.country}</p>}
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="flex flex-col">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.email}</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{order.customer && order.customer?.phone}</span>
                            {numberOfPairs.map(pair => {
                                return (
                                    <p><span className="font-semibold">{pair.base.size}</span> : x{pair.quantity}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commentaire</label>
                        <textarea
                            value={comment}
                            id="message"
                            rows={4}
                            className="my-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ajouter un commentaire à la commande"
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        {commentOrderResponse.loading && <Loader />}
                        {!commentOrderResponse.loading && <Button onClick={handleSubmitComment}>Sauvegarder</Button>}
                        {commentOrderResponse.error && <p>Erreur : {commentOrderResponse.error.message}</p>}
                    </div>
                </div>
            </div>
        )
    }
}