import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppRoute } from '../const/const';

const isAuth = true;

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}


export default PrivateRoute;
