export const offers = [
  {
    id: 1,
    name: 'Wood and stone place',
    city: 'Amsterdam',
    premium: false,
    pic: 'img/apartment-01.jpg',
    features: {
      type: 'Private room',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults',
    },
    rating: 3.8,
    price: 80,
    details: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      id: 1,
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    reviews: [
      {
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        name: 'Max',
        rating: 1,
        date: '10.10.2022',
        avatar: 'img/avatar-max.jpg',
      },
    ],
    point: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 2,
    name: 'Beautiful & luxurious studio at great location',
    city: 'Amsterdam',
    premium: false,
    pic: 'img/apartment-02.jpg',
    features: {
      type: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults',
    },
    rating: 4.5,
    price: 120,
    details: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    reviews: [
      {
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        name: 'Max',
        rating: 4,
        date: '10.10.2022',
        avatar: 'img/avatar-max.jpg',
      },
    ],
    point: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    city: 'Amsterdam',
    premium: false,
    pic: 'img/apartment-03.jpg',
    features: {
      type: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults',
    },
    rating: 4,
    price: 132,
    details: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    reviews: [
      {
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        name: 'Max',
        rating: 4,
        date: '10.10.2022',
        avatar: 'img/avatar-max.jpg',
      },
    ],
    point: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed appartment',
    city: 'Amsterdam',
    premium: true,
    pic: 'img/room.jpg',
    features: {
      type: 'Apartment',
      bedrooms: '3 Bedrooms',
      adults: 'Max 4 adults',
    },
    rating: 5,
    price: 180,
    details: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    reviews: [
      {
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        name: 'Max',
        rating: 4,
        date: '10.10.2022',
        avatar: 'img/avatar-max.jpg',
      },
    ],
    point: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
  },
];


export const getOffersByCity = (city: string, sortingType?: string) => {
  const offersX = offers.filter((offer) => offer.city === city);
  switch(sortingType) {
    case 'Popular':
      return offersX;
    case 'Price: low to high':
      return offersX.sort((a,b) => a.price - b.price);
    case 'Price: high to low':
      return offersX.sort((a,b) => b.price - a.price);
    case 'Top rated first':
      return offersX.sort((a,b) => b.rating - a.rating);
    default:
      return offersX;
  }
};
