import React from 'react';
import Logo from '../../assets/img/sallve-logo.png';
import { HeaderComponent } from './HeaderStyled.js'

const Header = () => {
    return (
        <HeaderComponent>
            <img alt="Logo da Sallve" src={Logo} />
        </HeaderComponent>
    )
};

export default Header;


