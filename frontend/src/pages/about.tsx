import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components'

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
    ButtonContainer,
    StyledLink,
    SkilsContainer
} from '../styles/pages/About'
import profile from '../assets/img1.jpg'

function About() {
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
                                <Image src={profile} />
                            </ImageContainer>

                            <Info>
                                <Title>Jonas de Oliveira</Title>

                                <Text>
                                    I am 17 years old and I love programming and I discovered this passion after
                                    seeing a little of this wonderful world that is programming and making my first hello
                                    world. I've been studying web programming for a few months, using javascript programming
                                    language on the frontend with Reactjs and the backend with nodejs.
                                </Text>

                                <ButtonContainer>
                                    <Link href='/portfolio'>
                                        <StyledLink>
                                            See my protfolio
                                        </StyledLink>
                                    </Link>
                                </ButtonContainer>
                            </Info>
                        </Content>
                        <Content>
                            <SkilsContainer>
                                <h1>Skills</h1>
                            </SkilsContainer>
                        </Content>
                    </Inner>
                </Main>
            </Container>
        </div>
    )
}

export default About
