import React from 'react'
import Link from 'next/link'

import {
    StyledLink
} from '../styles/components/Button'

interface ButtonProps {
    children?: React.ReactChild
    to: string
    marginTop?: string
}

function Button({ children, to, marginTop }: ButtonProps) {
    return (
        <Link href={to}>
            <StyledLink marginTop={marginTop}>{children}</StyledLink>
        </Link>
    )
}

export default Button
