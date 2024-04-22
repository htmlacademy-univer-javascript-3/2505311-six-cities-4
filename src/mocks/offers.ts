import {Offer} from '../const';

export const offerMock1: Offer = {
  id: '9058603452',
  mark: 'Premium',
  name: 'Beautiful & luxurious apartment at great location',
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  pricePerNight: '\u20AC120',
  images: ['img/apartment-01.jpg'],
  cardImage: 'img/apartment-01.jpg',
  type: 'Apartment',
  rating: 4,
  insideItems: ['Coffee machine', 'Dishwasher'],
  features: ['Apartment', '3 Bedrooms', 'Max 4 adults'],
  location: {latitude: 52.3909553943508, longitude: 4.939309666406198, zoom: 11},
};

export const offerMock2: Offer = {
  id: '3485734954',
  name: 'Wood and stone plac',
  description: 'An independent House, strategically located between' +
    ' Rembrandt Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  pricePerNight: '\u20AC80',
  images: ['img/room.jpg'],
  cardImage: 'img/room.jpg',
  type: 'Room',
  rating: 5,
  insideItems: ['Wi-Fi', 'Coffee machine', 'Dishwasher'],
  location: {latitude: 52.3609553943508, longitude: 4.929309666406198, zoom: 12},
};

export const offerMock3: Offer = {
  id: '34857954',
  name: 'Wood and stone plac',
  description: 'An independent House, strategically located between' +
    ' Rembrandt Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  pricePerNight: '\u20AC60',
  images: ['img/apartment-03.jpg'],
  cardImage: 'img/apartment-03.jpg',
  type: 'Apartment',
  rating: 3.5,
  insideItems: ['Wi-Fi', 'Coffee machine', 'Dishwasher'],
  location: {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 11},
};

export const offerMock4: Offer = {
  id: '348954',
  name: 'Wood and stone plac',
  description: 'An independent House, strategically located between' +
    ' Rembrandt Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  pricePerNight: '\u20AC90',
  images: ['img/apartment-02.jpg'],
  cardImage: 'img/apartment-02.jpg',
  type: 'Apartment',
  rating: 2.4,
  insideItems: ['Wi-Fi', 'Coffee machine', 'Dishwasher'],
  location: {latitude: 52.3809553943508, longitude: 4.85309666406198, zoom: 10}
};

export const places = [offerMock1, offerMock2, offerMock3, offerMock4];
