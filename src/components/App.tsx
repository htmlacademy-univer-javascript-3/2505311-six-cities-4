import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage, {HomePageProps} from './pages/Home/HomePage';
import Page404 from './pages/404/Page404.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import FavoritesPage from './pages/Favorites/FavoritesPage.tsx';
import OfferPage from './pages/Offer/OfferPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {
  offerMock1,
  offerMock2,
  offerMock3,
  offerMock4,
  places
} from '../mocks/offers';
import {Provider} from 'react-redux';
import {store} from '../store';

export default function App({homePageProps}: {homePageProps: HomePageProps}) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Home} element={<HomePage {...homePageProps}/>} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesPage allFavorites={[
                  {city: 'Amsterdam', offers: [offerMock1, offerMock2]},
                  {city: 'Cologne', offers: [offerMock3, offerMock4]}
                ]}
                />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage nearOffers={places.slice(0, 3)}/> } />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
