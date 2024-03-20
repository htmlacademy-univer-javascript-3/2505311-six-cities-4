import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const.ts';

export default function Page404() {
  return (
    <>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to={AppRoute.Home}>Вернуться на главную страницу</Link>
    </>
  );
}
