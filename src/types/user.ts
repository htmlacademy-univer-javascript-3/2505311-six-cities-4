export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface PrivateUser extends User {
  token: string;
  email: string;
  favoriteCount: number;
}
