import React, { useState, useEffect } from 'react'
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
    const [showDropside, setShowDropside] = useState(false)
    const [scroll, setScroll] = useState(false)
    const router = useRouter()

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true)
                return
            } 
            setScroll(false)
        })
    }, [])

    function toggleDropside() {
        if (showDropside) {
            setShowDropside(false)
            return
        }

        setShowDropside(true)
    }

    function goTo(url: string) {
        setShowDropside(false)
        setTimeout(() => {
            router.push(url)
        }, 430)
    }

    return (
        <Container className={scroll ? 'scroll' : ''}>
            <Navigation>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/portfolio'>Portfolio</Link>
                <Link href='/contac'>Contac</Link>
            </Navigation>

            <Dropside show={showDropside}>
                <DropsideButton onClick={() => goTo('/')}>Home</DropsideButton>
                <DropsideButton onClick={() => goTo('/about')}>About</DropsideButton>
                <DropsideButton onClick={() => goTo('/portfolio')}>Portfolio</DropsideButton>
                <DropsideButton onClick={() => goTo('/contac')}>Contact</DropsideButton>
            </Dropside>

            <Button onClick={toggleDropside}>
                <MenuIcon fontSize='large' />
            </Button>
        </Container>
    );
}

export default Header
