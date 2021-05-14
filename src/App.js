import React from 'react';

import { GlobalStyle } from './GlobalStyles';

import Header from './components/Header';
import ShoppingCart from './containers/ShoppingCart';

function App() {
    
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  .then(() => console.log('DEU CERTO'))
  .catch(() => console.log('DEU ERRO'))

  return (
    <>
    <GlobalStyle />
      <Header />
      <ShoppingCart />
    </>
  );
}

export default App;