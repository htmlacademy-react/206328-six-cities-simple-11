export const offers = [
  {
    id: 1,
    title: 'Wood and stone place',
    city: 'Amsterdam',
    premium: false,
    previewImage: 'img/apartment-01.jpg',
    images: ['img/apartment-01.jpg'],
    type: 'Private room',
    bedrooms: 3,
    maxAdults: 4,
    rating: 3.8,
    price: 80,
    goods: [
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
  },
  {
    id: 2,
    title: 'Beautiful & luxurious studio at great location',
    city: 'Amsterdam',
    premium: false,
    previewImage: 'img/apartment-02.jpg',
    images: ['img/apartment-02.jpg'],
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    rating: 4.5,
    price: 120,
    goods: [
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
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    city: 'Amsterdam',
    premium: false,
    previewImage: 'img/apartment-03.jpg',
    images: ['img/apartment-03.jpg'],
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    rating: 4,
    price: 132,
    goods: [
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed appartment',
    city: 'Amsterdam',
    premium: true,
    previewImage: 'img/room.jpg',
    images: ['img/room.jpg'],
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    rating: 5,
    price: 180,
    goods: [
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
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
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
