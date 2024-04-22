import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {HomePageProps} from './components/pages/Home/HomePage';
import {places} from './mocks/offers';
import {privateUserMock1} from './mocks/users';

const homePageProps : HomePageProps = {
  placesFound: places.length,
  places: places,
  user: privateUserMock1
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App homePageProps={homePageProps}/>
  </React.StrictMode>
);
