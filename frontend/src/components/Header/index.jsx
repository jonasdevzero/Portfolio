// import React from 'react';

import { 
    Container,
    Navigation,
    Link
} from './styles';

function Header() {
    return (
        <Container>
            <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portifolio'>Portifólio</Link>
            </Navigation>
        </Container>
    );
};

export default Header;
