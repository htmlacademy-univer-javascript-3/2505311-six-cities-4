import {AppRoute} from '../const.ts';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../types/user.ts';
import {useAppSelector} from '../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
