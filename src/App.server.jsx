import React, {Suspense} from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  FileRoutes,
  Link,
  Router,
  Route,
  ShopifyProvider,
} from '@shopify/hydrogen';

function App() {
  return (
    <React.Fragment>
      <Suspense>
        <ShopifyProvider>
          <Router>
            <FileRoutes />
          </Router>
        </ShopifyProvider>
      </Suspense>
    </React.Fragment>
  );
}

export default renderHydrogen(App);
