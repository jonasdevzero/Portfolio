import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header } from '../components'

import {
    Container,
    Content,
    Inner,
    AboutContainer,
    ImageContainer,
    Image,
    Info,
    Title,
    Text,
    ButtonContainer,
    Button
} from '../styles/pages/About'

import profile from '../assets/img1.jpg'

function About() {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Jonas - About</title>
            </Head>

            <Container>
                <Header />

                <Content>
                    <Inner>
                        <AboutContainer>
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
                                    <Button onClick={() => router.push('/skills')}>See my skills</Button>
                                </ButtonContainer>
                            </Info>
                        </AboutContainer>
                    </Inner>
                </Content>
            </Container>
        </div>
    )
}

export default About
