import HomePage, {HomePageProps} from './HomePage';

export default function App({homePageProps}: {homePageProps: HomePageProps}) {
  return (
    <HomePage placesFound={homePageProps.placesFound}/>
  );
}
