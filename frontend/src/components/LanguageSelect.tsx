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
}

function LanguageSelect({ to }: LanguageProps) {
    const router = useRouter()
    const [show, setShow] = useState(false)

    function handleClick() {
        router.push(`https://jonasdevzero-pt.vercel.app${to}`)
    }

    return (
        <>
            <Container onClick={() => setShow(!show)}>
                <img src="/icons/eua-flag.svg" alt="eua flag" />
                {show ?
                    <ArrowDropDownIcon />
                    :
                    <ArrowDropUpIcon />
                }
            </Container>

            <DropUp show={show} onClick={handleClick}>
                <img src="/icons/br-flag.svg" alt="br flag" />
                pt-BR
            </DropUp>
        </>
    )
}

export default LanguageSelect
