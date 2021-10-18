import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AppRoute} from '../const/const';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Card from '../card/card';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/privet-route';

type AppMainProps = {
  placesCount: number;
};

function App({placesCount} : AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage placesCount={placesCount}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <Route path={AppRoute.Offer} exact component={Card} />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
        >
        </PrivateRoute>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
