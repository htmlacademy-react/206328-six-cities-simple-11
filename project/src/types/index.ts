

export type { InitialStateType } from './state';
export type Review = {
  text: string;
  name: string;
  rating: number;
  date: string;
  avatar: string;
};

export type Host = {
  name: string;
  type: string;
  avatar: string;
  comments: string[];
};

export type Features = {
  type: string;
  bedrooms: string;
  adults: string;
};

export type Offer = {
  id: string;
  pic: string;
  name: string;
  premium: boolean;
  features: Features;
  rating: number;
  price: number;
  details: string[];
  host: Host;
  reviews: Review[];
  point: Point;
};

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  lat: number;
  lng: number;
};

export type CardProps = {
  offer: Offer;
  index: number;
  onListItemHover?: (id: string) => void;
};

export type MapProps = {
  city: City;
  points: Point[];
  selectedPoint: Point | null;
  className: string;
};
export type ReviewListProps = { reviews: Review[] };
export type ReviewItemProps = { review: Review };
export type MapComponentProps = { className: string };
