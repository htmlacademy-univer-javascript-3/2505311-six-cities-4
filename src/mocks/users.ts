import {PrivateUser, User} from '../const';

export const userMock1: User = {
  name: 'Angelina',
  status: 'Pro',
  avatarImage: 'img/avatar-angelina.jpg'
};

export const privateUserMock1: PrivateUser = {
  ...userMock1,
  email: 'angel.conner@gmail.com',
  favoriteCount: 4
};

export const userMock2: User = {
  name: 'Oliver',
  status: 'Casual',
  avatarImage: 'img/avatar.svg'
};

export const privateUserMock2: PrivateUser = {
  ...userMock2,
  email: 'Oliver.conner@gmail.com',
  favoriteCount: 4
};
