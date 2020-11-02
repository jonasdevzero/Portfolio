import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
    Container,
    Navigation,
    StyledLink,
    Dropside,
    DropsideButton,
    Button,
} from '../styles/components/Header'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header({ local }) {
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

    function goTo(href: string) {
        setTimeout(() => {
            setShowDropside(false)
        }, 300)

        setTimeout(() => {
            router.push(href)
        }, 800)
    }

    return (
        <Container className={scroll ? 'scroll' : ''}>
            <Navigation>
                <Link href='/'>
                    <StyledLink className={local}>Home</StyledLink>
                </Link>
                <Link href='/about'>
                    <StyledLink className={local}>About</StyledLink>
                </Link>
                <Link href='/portfolio'>
                    <StyledLink className={local}>Portfolio</StyledLink>
                </Link>
                <Link href='/contact'>
                    <StyledLink className={local}>Contac</StyledLink>
                </Link>
                <div className='header-animation'></div>
            </Navigation>

            <Dropside show={showDropside}>
                <DropsideButton 
                    className={local} 
                    onClick={() => goTo('/')}
                >
                    Home
                </DropsideButton>
                <DropsideButton 
                    className={local} 
                    onClick={() => goTo('/about')}
                >
                    About
                </DropsideButton>
                <DropsideButton 
                    className={local} 
                    onClick={() => goTo('/portfolio')}
                >
                    portfolio
                </DropsideButton>
                <DropsideButton 
                    className={local} 
                    onClick={() => goTo('/contact')}
                >
                    Contact
                </DropsideButton>

                <div className="dropside-animation"></div>
            </Dropside>

            <Button onClick={toggleDropside} show={showDropside}>
                {showDropside ? 
                    <CloseIcon />
                    :
                    <MenuIcon />
                }
            </Button>
        </Container>
    );
}

export default Header
