import React from 'react';

import { RemoveButtonComponent } from './RemoveButtonStyled.js';

const RemoveButton = ({ index, handleClick}) => (
  <RemoveButtonComponent
   onClick={handleClick}
   index={index}>

  -
  </RemoveButtonComponent>
)

export default RemoveButton;
