import React, { useState } from 'react'
import Link from 'next/link'

import {
    Container,
    DropUp,
    DropUpItem
} from '../styles/components/LanguageSelect'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

interface LanguageProps {
    location: string;
    language: 'en' | 'br';
}

const languages = ['en', 'br']

function LanguageSelect({ location, language }: LanguageProps) {
    const [show, setShow] = useState(false)

    return (
        <>
            <Container onClick={() => setShow(!show)}>
                <img src={`/icons/${language}-flag.svg`} alt={`current language: ${language}`} />

                {show ? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
            </Container>

            <DropUp show={show}>
                {languages.map((l, i) => l !== language ? (
                    <Link key={i} href={l === 'en' ? `${location}` : `/${l}${location}`}>
                        <DropUpItem>
                            <img src={`/icons/${l}-flag.svg`} alt={`language option ${l}`} />
                            {l}
                        </DropUpItem>
                    </Link>
                ) : null)}
            </DropUp>
        </>
    )
}

export default LanguageSelect
