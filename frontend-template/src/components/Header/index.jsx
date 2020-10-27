import React, { useState } from 'react';

import {
    Container,
    Navigation,
    Link,
    Button,
} from './styles';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const [showDropside, setShowDropside] = useState(false);

    function toggleDropside() {
        if (showDropside) {
            setShowDropside(false);
            return;
        };

        setShowDropside(true);
    };

    return (
        <Container>
            <Navigation show={showDropside}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/portifolio'>Portifólio</Link>
            </Navigation>

            <Button onClick={toggleDropside} show={showDropside}>
                <MenuIcon fontSize='large' />
            </Button>
        </Container>
    );
};

export default Header;
