export enum AppRoute {
  Login = '/login',
  Home = '/',
  Offer = '/offer/:id',
  Favorites = '/favorites'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export interface Offer {
  id: string;
  name: string;
  description?: string;
  mark?: string;
  images: string[];
  cardImage: string;
  pricePerNight: string;
  rating: number;
  type: string;
  insideItems?: string[];
  features?: string[];
  location: Location;
}

export interface Review {
  user: User;
  text: string;
  date: string;
}

export interface User {
  status: string;
  name: string;
  avatarImage: string;
}

export interface PrivateUser extends User {
  email: string;
  favoriteCount: number;
}

export interface FavoriteCityOffers {
  city: string;
  offers: Offer[];
}

export type FavoriteAllOffers = FavoriteCityOffers[]

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export const cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
];
