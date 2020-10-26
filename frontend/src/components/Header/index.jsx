// import React from 'react';

import { 
    Container,
    Link
} from './styles';

function Header() {
    return (
        <Container>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portifolio'>Portifólio</Link>
            </nav>
        </Container>
    );
};

export default Header;
