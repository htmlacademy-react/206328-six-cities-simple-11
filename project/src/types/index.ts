export type { InitialStateType } from './state';
export type Review = {
  text: string;
  name: string;
  rating: number;
  date: string;
  avatar: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Host = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
  id: number;
};

export type Features = {
  type: string;
  bedrooms: string;
  adults: string;
};

export type Offer = {
  id: number;
  pic: string;
  name: string;
  city: string;
  premium: boolean;
  features: Features;
  rating: number;
  price: number;
  goods: string[];
  host: Host;
  reviews: Review[];
  location: Location;
};

export type City = {
  location: Location;
  name: string;
};

export type CardProps = {
  offer: Offer;
  onListItemHover?: (id: number) => void;
};

export type MapProps = {
  city: City;
  points: Location[];
  selectedPoint: Location | null;
  className: string;
};

export type Offer2 = {
  bedrooms: number;
  city: City;
  description: string;
  goods: [string];
  host: Host;
  id: number;
  images: [string];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = Offer2[];

export type ReviewListProps = { reviews: Review[] };
export type ReviewItemProps = { review: Review };
export type MapComponentProps = { className: string };
