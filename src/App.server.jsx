import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {FileRoutes, Router, ShopifyProvider} from '@shopify/hydrogen';

function App() {
  return (
    <React.Fragment>
      <ShopifyProvider>
        <Router>
          <FileRoutes />
        </Router>
      </ShopifyProvider>
    </React.Fragment>
  );
}

export default renderHydrogen(App);
