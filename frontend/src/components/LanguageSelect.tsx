import React, { useState } from 'react'
import { useRouter } from 'next/router'

import {
    Container,
    DropUp,
} from '../styles/components/LanguageSelect'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

interface LanguageProps {
    to?: string;
    language?: string;
}

function LanguageSelect({ to, language }: LanguageProps) {
    const router = useRouter()
    const [show, setShow] = useState(false)

    function handleClick() {
        router.push(to)
    }

    return (
        <>
            <Container onClick={() => setShow(!show)}>
                {
                    language === 'en' ?
                        (
                            <img src="/icons/br-flag.svg" alt="eua flag" />
                        )
                        :
                        (
                            <img src="/icons/eua-flag.svg" alt="eua flag" />
                        )
                }
                {show ?
                    <ArrowDropDownIcon />
                    :
                    <ArrowDropUpIcon />
                }
            </Container>

            <DropUp show={show} onClick={handleClick}>
                {
                    language === 'en' ?
                        (
                            <>
                                <img src="/icons/eua-flag.svg" alt="eua flag" />
                                en
                            </>
                        )
                        :
                        (
                            <>
                                <img src="/icons/br-flag.svg" alt="eua flag" />
                                pt-Br
                            </>
                        )
                }
            </DropUp>
        </>
    )
}

export default LanguageSelect
