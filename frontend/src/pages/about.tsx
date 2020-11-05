import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { Header, PorcentageCircle } from '../components'

import {
    Container,
    Main,
    Inner,
    Content,
    ImageContainer,
    Image,
    Info,
    Title,
    Text,

    SkillsContainer,
    Skills
} from '../styles/pages/About'

function About() {
    const [porcentageAnimation, setPorcentageAnimation] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 120) {
                setPorcentageAnimation(true)
            } else {
                setPorcentageAnimation(false)
            }
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Jonas - About</title>
            </Head>

            <Container>
                <Header local='about' />

                <Main>
                    <Inner>

                        <Content>
                            <ImageContainer>
                                <Image src='/developer.jpg' />
                            </ImageContainer>

                            <Info>
                                <Title>Jonas de Oliveira</Title>
                                <Text>
                                    I am {(2003 - new Date().getFullYear()).toString().split('-')[1]} years 
                                    old and I love programming and I discovered this passion after
                                    seeing a little of this wonderful world that is programming and making my first hello
                                    world. I've been studying web programming for a few months, using javascript programming
                                    language on the frontend with Reactjs and the backend with nodejs.
                                </Text>
                            </Info>
                        </Content>
                    </Inner>
                </Main>
            </Container>
        </div>
    )
}

export default About
