import React from 'react';
import  CarryBag  from '../../assets/img/carry-bag.png';

import { EmptyCartComponent } from './EmptyCartStyled';

const EmptyCart = () => (
  <EmptyCartComponent>
    <img alt="Icone de Sacola de compras" src={CarryBag} />
    <h3>Ops! sua sacola ainda está vazia. vem cá descobrir nossas fórmulas e escolher a sua!</h3>
  </EmptyCartComponent>
)

export default EmptyCart;
