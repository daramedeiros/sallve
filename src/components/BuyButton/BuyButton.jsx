import React from 'react';

import { BuyButtonComponent } from './BuyButtonStyled.js';

const BuyButton = ({ index, handleClick }) => (
  <BuyButtonComponent
    onClick={handleClick}
    index={index}>

  Comprar
  </BuyButtonComponent>
)

export default BuyButton;


