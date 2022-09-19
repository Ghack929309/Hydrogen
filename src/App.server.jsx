import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';



function App() {

  return (
 <React.Fragment>
   {/*<CssBaseline/>*/}
   <h1 className="bg-amber-300 text-center ">Hello world</h1>
 </React.Fragment>
  );
}

export default renderHydrogen(App);
