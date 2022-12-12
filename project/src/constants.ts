export const MAX_RATING_VALUE = 5;
export const ZOOM_SCALE_COEFICENT = 1.3;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export enum RatingValues {
  Perfect = '5',
  Good = '4',
  NotBad = '3',
  Badly = '2',
  Terribly = '1'
}

export const cities = [
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.377956,
      longitude: 4.89707,
      zoom: 10
    }
  },
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.85,
      longitude: 4.35,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
  }
];
