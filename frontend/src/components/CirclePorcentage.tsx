import React from 'react'

import {
    CircleContainer,
    TextBox
} from '../styles/components/CirclePorcentage';

interface PorcentageProps {
    porcentage: number
    text: string
    animate?: boolean
};

function PorcentageCircle({ porcentage, text, animate }: PorcentageProps) {
    return (
        <CircleContainer porcentage={porcentage} animate={animate}>
            <svg>
                <circle cx='50' cy='50' r='35' />
                <circle cx='50' cy='50' r='35' />
            </svg>
            <TextBox>
                <h1>{text}</h1>
                <h2>{porcentage}%</h2>
            </TextBox>
        </CircleContainer>
    )
}

export default PorcentageCircle
