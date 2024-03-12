import React,{ useState } from 'react';
import Navigation from './Navigation/Navigation';

export default function App() {
  const [defaultScreen, setDefaultScreen] = useState("homeView");

  return (
 <Navigation defaultScreen={defaultScreen}/>
  );
}
