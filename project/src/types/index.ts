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

export type Offer = {
  id: number;
  previewImage: string;
  images: string[];
  title: string;
  city: City;
  isPremium: boolean;
  description: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  rating: number;
  price: number;
  goods: string[];
  host: Host;
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

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
};

// export type Offer2 = {
//   bedrooms: number;
//   city: City;
//   description: string;
//   goods: [string];
//   host: Host;
//   id: number;
//   images: [string];
//   isPremium: boolean;
//   location: Location;
//   maxAdults: number;
//   previewImage: string;
//   price: number;
//   rating: number;
//   title: string;
//   type: string;
// };

export type Offers = Offer[];
export type Comments = Comment[];
export type ReviewListProps = { reviews: Review[] };
export type ReviewItemProps = { review: Review };
export type MapComponentProps = { className: string };
