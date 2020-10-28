import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
    Container,
    Navigation,
    Dropside,
    DropsideButton,
    Button,
} from '../styles/components/Header'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    const [showDropside, setShowDropside] = useState(false);
    const router = useRouter()

    function toggleDropside() {
        if (showDropside) {
            setShowDropside(false)
            return
        };

        setShowDropside(true)
    };

    function goTo(url: string) {
        setShowDropside(false)
        setTimeout(() => {
            router.push(url)
        }, 430)
    };

    return (
        <Container>
            <Navigation>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/skills'>Skills</Link>
                <Link href='/portfolio'>Portfolio</Link>
            </Navigation>

            <Dropside show={showDropside}>
                <DropsideButton onClick={() => goTo('/')}>Home</DropsideButton>
                <DropsideButton onClick={() => goTo('/about')}>About</DropsideButton>
                <DropsideButton onClick={() => goTo('/skills')}>Skills</DropsideButton>
                <DropsideButton onClick={() => goTo('/portfolio')}>Portfolio</DropsideButton>
            </Dropside>

            <Button onClick={toggleDropside} show={showDropside}>
                <MenuIcon fontSize='large' />
            </Button>
        </Container>
    );
}

export default Header
