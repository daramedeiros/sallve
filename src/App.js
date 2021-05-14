import React from 'react';
import { GlobalStyle } from './GlobalStyles';

import Header from './components/Header';
import ShoppingCart from './containers/ShoppingCart';

function App() {

  return (
    <>
    <GlobalStyle />
      <Header />
      <ShoppingCart />
    </>
  );
}

export default App;