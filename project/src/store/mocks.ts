import faker from 'faker';
import { Offer, City, Location, Host } from '../types';

export const makeFakeOffer = (): Offer => ({
  id: faker.datatype.number(100),
  previewImage: faker.image.image(),
  images: [
    faker.image.nature(),
    faker.image.city(),
    faker.image.food()
  ],
  title: faker.name.title(),
  city: {
    name: faker.address.city(),
    location: {
      latitude: faker.datatype.number(10),
      longitude: faker.datatype.number(10),
      zoom: faker.datatype.number(10)
    } as Location,
  } as City,
  isPremium: faker.datatype.boolean(),
  description: faker.commerce.productDescription(),
  type: faker.datatype.string(),
  bedrooms: faker.datatype.number(10),
  maxAdults: faker.datatype.number(10),
  rating: faker.datatype.number(5),
  location: {
    latitude: faker.datatype.number(10),
    longitude: faker.datatype.number(10),
    zoom: faker.datatype.number(10)
  } as Location,
  price: faker.datatype.number(10),
  goods: [faker.commerce.product(),faker.commerce.product(),faker.commerce.product()],
  host: {
    name: faker.name.firstName(),
    avatarUrl: faker.image.avatar(),
    isPro: faker.datatype.boolean(),
    id: faker.datatype.number(100)
  } as Host
} as Offer);

export const makeFakeOffers = () => [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];
