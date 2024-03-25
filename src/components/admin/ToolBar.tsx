import Order from "@/types/order";
import { useState } from "react";
import { serverUrl } from "@/globals/serverUrl";
import { Button } from "../ui/button";
import { Loader } from "../ui/Loader";
import { SelectFilter } from "./SelectFilter";
import { UpdateOrdersStatus } from "./UpdateOrdersStatus";

export const ToolBar: React.FC<{ selectedOrders: Order[], refetch: any, filters: string[], setFilters: React.Dispatch<React.SetStateAction<string[]>> }> = ({ selectedOrders, refetch, filters, setFilters }) => {
    const [designsLoading, setDesignsLoadings] = useState(false)
    const [timbresLoading, setTimbresLoadings] = useState(false)
    const handlePrintDesigns = async () => {
        try {
            setDesignsLoadings(true)
            // Récupérer les IDs des commandes sélectionnées
            const orderIds = selectedOrders.map(order => order.id);

            // Créer un objet contenant les données à envoyer dans le corps de la requête
            const requestBody = JSON.stringify({ orderIds });

            // Envoyer une requête POST au serveur pour générer les PDF des designs
            const response = await fetch(`${serverUrl}/pdf/generate-pdf`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody
            });

            // Vérifier si la requête a réussi (statut HTTP 200)
            if (response.ok) {
                // Déclencher le téléchargement du fichier PDF
                // Convertir la réponse en blob
                const pdfBlob = await response.blob();

                // Créer un URL pour le blob
                const pdfUrl = window.URL.createObjectURL(pdfBlob);

                // Créer un lien <a> pour le téléchargement
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.setAttribute('download', 'designs.pdf');

                // Ajouter le lien au document et cliquer dessus pour démarrer le téléchargement
                document.body.appendChild(link);
                link.click();

                // Nettoyer l'URL après le téléchargement
                window.URL.revokeObjectURL(pdfUrl);
                setDesignsLoadings(false)
                refetch()
            } else {
                setDesignsLoadings(false)
                console.error('La requête a échoué avec le statut :', response.status);
                // Gérer l'erreur
            }
        } catch (error) {
            setDesignsLoadings(false)
            console.error('Erreur lors de la génération des PDF des designs :', error);
            // Gérer l'erreur
        }
    };

    const handlePrintTimbres = async () => {
        console.log('printing timbres')
        try {
            setTimbresLoadings(true)
            // Récupérer les IDs des commandes sélectionnées
            const orderIds = selectedOrders.map(order => order.id);

            // Créer un objet contenant les données à envoyer dans le corps de la requête
            const requestBody = JSON.stringify({ orderIds });

            // Envoyer une requête POST au serveur pour générer les PDF des designs
            const response = await fetch(serverUrl + '/delivery/generate-timbres', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody
            });

            // Vérifier si la requête a réussi (statut HTTP 200)
            if (response.ok) {
                // Déclencher le téléchargement du fichier PDF
                // Convertir la réponse en blob
                const pdfBlob = await response.blob();

                // Créer un URL pour le blob
                const pdfUrl = window.URL.createObjectURL(pdfBlob);

                // Créer un lien <a> pour le téléchargement
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.setAttribute('download', 'designs.pdf');

                // Ajouter le lien au document et cliquer dessus pour démarrer le téléchargement
                document.body.appendChild(link);
                link.click();

                // Nettoyer l'URL après le téléchargement
                window.URL.revokeObjectURL(pdfUrl);
                setTimbresLoadings(false)
                refetch()
            } else {
                setTimbresLoadings(false)
                console.error('La requête a échoué avec le statut :', response.status);
                // Gérer l'erreur
            }
        } catch (error) {
            setTimbresLoadings(false)
            console.error('Erreur lors de la génération des PDF des designs :', error);
            // Gérer l'erreur
        }
    };

    return (
        <div className="bg-slate-100 p-5 border rounded sticky top-0">
            <p className="font-semibold">{selectedOrders.length} commandes sélectionnées</p>
            <div className="flex gap-5">
                <Button disabled={selectedOrders.length < 1} onClick={handlePrintDesigns} className="w-40">{designsLoading ? <Loader /> : "Imprimer Designs"}</Button>
                <Button disabled={selectedOrders.length < 1} onClick={handlePrintTimbres} className="w-40">{timbresLoading ? <Loader /> : "Imprimer Timbres"}</Button>
            </div>
            <SelectFilter filters={filters} setFilters={setFilters} />
            <UpdateOrdersStatus selectedOrders={selectedOrders} refetch={refetch}/>
        </div>
    )
}