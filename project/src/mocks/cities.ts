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
      latitude: 50.872986,
      longitude: 4.309333,
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

export const getCityByName = (name: string) => cities.find((city) => city.name === name);
