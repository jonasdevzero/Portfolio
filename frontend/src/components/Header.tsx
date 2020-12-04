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
    location?: string;
    language: 'en' | 'br';
}

function Header({ location, language }: IHeader) {
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

                <Link href={language === 'en' ? '/' : `/${language}`}>
                    <StyledLink className={location}>
                        {
                            language === 'en' ? 'Home' :
                                language === 'br' ? 'Início' :
                                    null
                        }
                    </StyledLink>
                </Link>

                <Link href={language === 'en' ? '/about' : `/${language}/about`}>
                    <StyledLink className={location}>
                        {
                            language === 'en' ? 'About' :
                                language === 'br' ? 'Sobre' :
                                    null
                        }
                    </StyledLink>
                </Link>

                <Link href={language === 'en' ? '/portfolio' : `/${language}/portfolio`}>
                    <StyledLink className={location}>
                        portfolio
                    </StyledLink>
                </Link>

                <Link href={language === 'en' ? '/contact' : `/${language}/contact`}>
                    <StyledLink className={location}>
                        {
                            language === 'en' ? 'Contact' :
                                language === 'br' ? 'Contato' :
                                    null
                        }
                    </StyledLink>
                </Link>
                <div className='header-animation'></div>
            </Navigation>

            <Dropside show={showDropside}>
                <DropsideButton
                    className={location}
                    onClick={() => goTo(language === 'en' ? '/' : `/${language}`)}
                >
                    {
                        language === 'en' ? 'Home' :
                            language === 'br' ? 'Início' :
                                null
                    }
                </DropsideButton>
                <DropsideButton
                    className={location}
                    onClick={() => goTo(language === 'en' ? '/about' : `/${language}/about`)}
                >
                    {
                        language === 'en' ? 'About' :
                            language === 'br' ? 'Sobre' :
                                null
                    }
                </DropsideButton>
                <DropsideButton
                    className={location}
                    onClick={() => goTo(language === 'en' ? '/portfolio' : `/${language}/portfolio`)}
                >
                    portfolio
                </DropsideButton>
                <DropsideButton
                    className={location}
                    onClick={() => goTo(language === 'en' ? '/contact' : `/${language}/contact`)}
                >
                    {
                        language === 'en' ? 'Contact' :
                            language === 'br' ? 'Contato' :
                                null
                    }
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
