export const offers = [
  {
    id: 'e730b5b8-16fa-4cac-a04a-e09bbe280185',
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
      type: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
      comments: [
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

        'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      ],
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
    id: 'e730b5b8-16fa-4cac-a04a-e09bbe280184',
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
      type: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
      comments: [
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

        'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      ],
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
    id: 'e730b5b8-16fa-4cac-a04a-e09bbe280183',
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
      type: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
      comments: [
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

        'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      ],
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
    id: 'e730b5b8-16fa-4cac-a04a-e09bbe280453',
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
      type: 'Pro',
      avatar: 'img/avatar-angelina.jpg',
      comments: [
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

        'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      ],
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
  const filtered = offers.filter((offer) => offer.city === city);
  switch(sortingType) {
    case 'Popular':
      return filtered;
    case 'Price: low to high':
      return filtered.sort((a,b) => a.price - b.price);
    case 'Price: high to low':
      return filtered.sort((a,b) => b.price - a.price);
    case 'Top rated first':
      return filtered.sort((a,b) => b.rating - a.rating);
    default:
      return filtered;
  }
};
