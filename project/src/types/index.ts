export type Card = number;
export type MainProps = { cards: Card[] };

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
  entire: string;
  bedrooms: string;
  adults: string;
}

export type Offer = {
  name: string;
  type: string;
  features: Features;
  rating: number;
  price: number;
  details: string[];
  host: Host;
  reviews: Review[];
}


export type AppProps = { cards: Card[]; offers: Offer[] };
