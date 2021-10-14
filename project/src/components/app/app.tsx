//import MainPage from '../main-page/main-page';
import PropertyNotLogged from '../property-not-logged/property-not-logged';

type AppMainProps = {
  placesCount: number;
};

function App({placesCount} : AppMainProps): JSX.Element {
  //return <MainPage placesCount={placesCount}/>;
  return <PropertyNotLogged/>;
}

export default App;
