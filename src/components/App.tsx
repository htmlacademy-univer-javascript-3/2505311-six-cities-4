import HomePage, {HomePageProps} from '../pages/Home/HomePage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App({homePageProps}: {homePageProps: HomePageProps}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage placesFound={homePageProps.placesFound}/>} />
        <Route path="/login" element={<div />} />
        <Route path="/offer" element={<div /> } />
      </Routes>
    </BrowserRouter>

  );
}
