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

interface IHeader {
    local?: string;
    language?: 'en' | 'br';
}

function Header({ local, language }: IHeader) {
    const [showDropside, setShowDropside] = useState(false)
    const [scroll, setScroll] = useState(false)
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 0 ? setScroll(true) : setScroll(false))
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
                <Link href={language === 'en' ? '/' : '/br'}>
                    <StyledLink className={local}>
                        {language === 'en' ? 'Home' : 'Início'}
                    </StyledLink>
                </Link>
                <Link href={language === 'en' ? '/about' : '/br/sobre'}>
                    <StyledLink className={local}>
                        {language === 'en' ? 'About' : 'Sobre'}
                    </StyledLink>
                </Link>
                <Link href={language === 'en' ? '/portfolio' : '/br/portfolio'}>
                    <StyledLink className={local}>
                        portfolio
                    </StyledLink>
                </Link>
                <Link href={language === 'en' ? '/contact' : '/br/contato'}>
                    <StyledLink className={local}>
                        {language === 'en' ? 'Contact' : 'Contato'}
                    </StyledLink>
                </Link>
                <div className='header-animation'></div>
            </Navigation>

            <Dropside show={showDropside}>
                <DropsideButton
                    className={local}
                    onClick={() => goTo(language === 'en' ? '/' : '/br')}
                >
                    {language === 'en' ? 'Home' : 'Início'}
                </DropsideButton>
                <DropsideButton
                    className={local}
                    onClick={() => goTo(language === 'en' ? '/about' : '/br/sobre')}
                >
                    {language === 'en' ? 'About' : 'Sobre'}
                </DropsideButton>
                <DropsideButton
                    className={local}
                    onClick={() => goTo(language === 'en' ? '/portfolio' : '/br/portfolio')}
                >
                    portfolio
                </DropsideButton>
                <DropsideButton
                    className={local}
                    onClick={() => goTo(language === 'en' ? '/contact' : '/br/contato')}
                >
                    {language === 'en' ? 'Contact' : 'Contato'}
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
