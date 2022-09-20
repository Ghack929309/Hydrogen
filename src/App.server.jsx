import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import HomePage from "./routes/pages/Homepage";




function App() {

  return (
 <React.Fragment>
 <HomePage/>
 </React.Fragment>
  );
}

export default renderHydrogen(App);
