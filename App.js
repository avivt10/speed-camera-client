import React,{ useState } from 'react';
import Navigation from './Navigation/Navigation';

const App = () => {
  const [defaultScreen, setDefaultScreen] = useState("homeView");

  return (
 <Navigation defaultScreen={defaultScreen}/>
  );
}

export default App;
