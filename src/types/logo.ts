export type LogoCategory = "Football" | "Tennis" | "Natation" | "Basket-ball" | "Athlétisme" | "Rugby" | "Judo" | "Cyclisme" | "Escrime" | "Handball" | "Gymnastique" | "Volley-ball" | "Équitation" | "Super-héros" | "Tendances" | "Animaux" | "Chevalier" | "Nourriture" | "Musique" | "Voyage" | "Espace" | "Fantaisie" | "Dessins animés" | "Université";

export const valeursLogoCategory: LogoCategory[] = [
    "Football",
    "Tennis",
    "Natation",
    "Basket-ball",
    "Athlétisme",
    "Rugby",
    "Judo",
    "Cyclisme",
    "Escrime",
    "Handball",
    "Gymnastique",
    "Volley-ball",
    "Équitation",
    "Super-héros",
    "Tendances",
    "Animaux",
    "Chevalier",
    "Nourriture",
    "Musique",
    "Voyage",
    "Espace",
    "Fantaisie",
    "Dessins animés",
    "Université"
];

export type Logo = {
    id: number
    url: string
    category: LogoCategory
} 
