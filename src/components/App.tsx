import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage, {HomePageProps} from './pages/Home/HomePage';
import Page404 from './pages/404/Page404.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import FavoritesPage from './pages/Favorites/FavoritesPage.tsx';
import OfferPage from './pages/Offer/OfferPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import {AppRoute, AuthorizationStatus} from '../const.ts';

export default function App({homePageProps}: {homePageProps: HomePageProps}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<HomePage placesFound={homePageProps.placesFound}/>} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage /> } />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>

  );
}
