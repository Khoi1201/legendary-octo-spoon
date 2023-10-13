import './App.css';

import { Suspense, useEffect, useState } from 'react';
import Router from './routers/Router';

// import ContextComponent from './context/ContextComponent'; // no context yet
// import Cookies from 'js-cookie'; // no use yet
// import { PathnameProvider } from './context/PathnameContext'; // no pathname yet
// import Router from './routers/Router'; // no router yet
// import { images } from './constants/image'; // no image yet


function App() {
  return (
    <Router />
  );
}

export default App;
