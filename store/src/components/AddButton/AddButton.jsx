import React from 'react';

import { AddButtonComponent } from './AddButtonStyled';

const AddButton = ({ index, handleClick }) => (
  <AddButtonComponent
   onClick={handleClick}
   index={index}
   data-testid="add-button">
  +
  </AddButtonComponent>
)

export default AddButton;
