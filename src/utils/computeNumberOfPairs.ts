import Order from "@/types/order";

interface NumberOfPairsForBase {
    base: {
        id: number,
        size: string
    }
    quantity: number
}
export const computeNumberOfPairs = (order: Order): NumberOfPairsForBase[] => {
    const baseQuantityMap: { [key: string]: { base: { id: number; size: string }; quantity: number } } = {};

    // Parcourir chaque produit dans la commande
    order.products.forEach(product => {
        const { base, quantity } = product;

        // Générer une clé unique pour chaque base
        const key = `${base.id}-${base.size}`;

        // Si la base existe déjà dans la map, ajouter la quantité actuelle
        if (baseQuantityMap[key]) {
            baseQuantityMap[key].quantity += quantity;
        } else {
            // Sinon, initialiser la quantité pour cette base
            baseQuantityMap[key] = { base, quantity };
        }
    });

    // Convertir la map en un tableau d'objets NumberOfPairsForBase
    const numberOfPairsForBase: NumberOfPairsForBase[] = Object.keys(baseQuantityMap).map(key => {
        const { base, quantity } = baseQuantityMap[key];
        return { base, quantity };
    });

    return numberOfPairsForBase;
};