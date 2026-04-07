export interface Property {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  surface: number;
  rooms: number;
  district: string;
  description: string;
  images: string[];
  features: string[];
  category: 'Exclusivité' | 'Prestige' | 'Rare';
  type: 'Appartement' | 'Maison' | 'Atelier';
  floor?: number;
  hasTerrace?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: "Splendide Atelier d'Artiste",
    price: "2 450 000 €",
    priceNum: 2450000,
    surface: 120,
    rooms: 4,
    district: "Paris 18e",
    description: "Niché au coeur d'une impasse privée, cet atelier d'artiste historique offre des volumes spectaculaires sous une verrière zénithale de 6 mètres de hauteur. Entièrement rénové avec des matériaux nobles, il allie le charme de l'ancien et le confort moderne.",
    images: [
      "https://images.unsplash.com/photo-1611248293543-e71973f8b94b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1477120206578-46b3ca98a4e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=75&w=800&auto=format&fit=crop"
    ],
    features: ["Domotique", "Parquet point de Hongrie", "Verrière zénithale", "Cheminée"],
    category: 'Exclusivité',
    type: 'Atelier',
    floor: 0
  },
  {
    id: '2',
    title: "Duplex avec Vue Sacré-Cœur",
    price: "3 100 000 €",
    priceNum: 3100000,
    surface: 145,
    rooms: 5,
    district: "Montmartre",
    description: "Ce duplex d'exception situé au dernier étage d'un immeuble pierre de taille offre une vue panoramique imprenable sur la Basilique du Sacré-Cœur. Une terrasse de 20m² complète ce bien rare.",
    images: [
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcGFydGVtZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1680100256127-e73d3f1f3376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVwbGV4fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1673014201308-5963c9017fb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1cGxleHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=75&w=800&auto=format&fit=crop"
    ],
    features: ["Vue Sacré-Cœur", "Terrasse", "Dernier étage", "Climatisation"],
    category: 'Prestige',
    type: 'Appartement',
    floor: 5,
    hasTerrace: true
  },
  {
    id: '3',
    title: "Hôtel Particulier Historique",
    price: "5 800 000 €",
    priceNum: 5800000,
    surface: 310,
    rooms: 8,
    district: "Avenue Junot",
    description: "Sur la prestigieuse Avenue Junot, cet hôtel particulier du début du siècle dispose d'un jardin privé arboré de 150m². Un havre de paix absolu au coeur de la Butte.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=75&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1761347604632-944c4400093a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBwYXJ0aWN1bGllcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1569660072562-48a035e65c30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwYXJ0aWN1bGllcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=75&w=800&auto=format&fit=crop"
    ],
    features: ["Jardin privé", "Sous-sol aménagé", "Garage", "Alarme"],
    category: 'Rare',
    type: 'Maison'
  },
  {
    id: '4',
    title: "Loft Industriel Rénové",
    price: "1 850 000 €",
    priceNum: 1850000,
    surface: 110,
    rooms: 3,
    district: "Lamarck",
    description: "Ancienne imprimerie transformée en loft contemporain. Grands volumes, béton ciré et verrières d'origine.",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=75&w=1200&auto=format&fit=crop",
      "https://unsplash.com/fr/photos/canape-en-cuir-noir-avec-jete-gris-pillwo-s95oB2n9jng",
      "https://unsplash.com/fr/photos/concept-de-design-dinterieur-de-vie-moderne-idee-de-rendu-3d-6Dw4BMFZaqY",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=800&auto=format&fit=crop"
    ],
    features: ["Béton ciré", "Cuisine équipée", "Ascenseur"],
    category: 'Exclusivité',
    type: 'Atelier',
    floor: 1
  },
  {
    id: '5',
    title: "Appartement d'Angle Haussmannien",
    price: "2 150 000 €",
    priceNum: 2150000,
    surface: 130,
    rooms: 4,
    district: "Abbesses",
    description: "Au coeur des Abbesses, magnifique appartement d'angle avec balcon filant. Moulures, cheminées et parquets d'origine.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687940-4e524cb35a5a?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=75&w=800&auto=format&fit=crop"
    ],
    features: ["Balcon filant", "Moulures", "Cheminée", "Cave"],
    category: 'Prestige',
    type: 'Appartement',
    floor: 3,
    hasTerrace: true
  },
  {
    id: '6',
    title: "Studio de Charme sous les Toits",
    price: "650 000 €",
    priceNum: 650000,
    surface: 35,
    rooms: 1,
    district: "Place du Tertre",
    description: "Petit bijou sous les toits avec vue sur les jardins de Montmartre. Idéal pied-à-terre ou investissement.",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=75&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687940-4e524cb35a5a?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=75&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=800&auto=format&fit=crop"
    ],
    features: ["Vue dégagée", "Calme", "Dernier étage"],
    category: 'Rare',
    type: 'Appartement',
    floor: 6
  }
];
