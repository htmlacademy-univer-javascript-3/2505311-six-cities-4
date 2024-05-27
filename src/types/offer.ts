import {City, Location} from './city.ts';
import {User} from './user.ts';

export interface OfferBase {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export interface Offer extends OfferBase {
  description?: string;
  bedrooms: number;
  goods?: string[];
  host: User;
  images: string[];
  maxAdults: number;
  comments?: Comment[];
  nearPlaces?: Offer[];
}

export interface CommentBase {
  comment: string;
  rating: number;
}

export interface Comment extends CommentBase {
  id: string;
  user: User;
  date: string;
}

export interface FavoriteCityOffers {
  city: string;
  offers: Offer[];
}

export type FavoriteAllOffers = FavoriteCityOffers[];
