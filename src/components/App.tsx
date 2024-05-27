import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Page404 from './pages/404/Page404.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import FavoritesPage from './pages/Favorites/FavoritesPage.tsx';
import OfferPage from './pages/Offer/OfferPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import {AppRoute} from '../const.ts';
import {Provider} from 'react-redux';
import {store} from '../store';
import {AuthorizationStatus} from '../types/user.ts';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Home} element={<HomePage />} />
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
    </Provider>
  );
}
