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
