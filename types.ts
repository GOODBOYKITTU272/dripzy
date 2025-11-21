export interface WeekConfig {
  id: number;
  name: string;
  dates: string;
  description: string;
  eligibleCohorts: number[]; // Array of week IDs that are eligible to earn
}

export interface EarningScenario {
  totalSales: number;
  productPrice: number;
  week1Buyers: number;
  week2Buyers: number;
  week3Buyers: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProductFeature {
  icon: any; // Lucide icon component
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  tag: string;
  description: string;
  features: ProductFeature[];
  image: string;
  rating: number;
  reviews: number;
}
