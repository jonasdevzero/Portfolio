import React, { useState } from 'react';
import Link from 'next/link';

import {
    Container,
    Navigation,
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
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/skills'>Skills</Link>
                <Link href='/portfolio'>Portifólio</Link>
            </Navigation>

            <Button onClick={toggleDropside} show={showDropside}>
                <MenuIcon fontSize='large' />
            </Button>
        </Container>
    );
}

export default Header
