import React from 'react';

import { DeleteButtonComponent } from './DeleteButtonStyled.js';

const DeleteButton = ({ index, handleClick}) => (
  <DeleteButtonComponent
    onClick={handleClick}
    index={index}>

  x
  </DeleteButtonComponent>
)

export default DeleteButton;
