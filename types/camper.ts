export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  /* Vehicle type */
  form: 'panelTruck' | 'fullyIntegrated' | 'alcove';

  /* Details */
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  /* Features */
  transmission: 'automatic' | 'manual';
  engine: 'diesel' | 'petrol';

  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  /* Media */
  gallery: {
    thumb: string;
    original: string;
  }[];

  /* Reviews */
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}
export interface CampersResponse {
  total: number;
  items: Camper[];
}
