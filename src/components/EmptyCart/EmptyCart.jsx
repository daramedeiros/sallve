import React from 'react';
import  CarryBag  from '../../assets/img/carry-bag.png';

import { EmptyCartComponent } from './EmptyCartStyled';

const EmptyCart = () => (
  <EmptyCartComponent>
    <img alt="Icone de Sacola de compras" src={CarryBag} />
    <p>Ops! sua sacola ainda está vazia. vem cá descobrir nossas fórmulas e escolher a sua!</p>
  </EmptyCartComponent>
)

export default EmptyCart;
