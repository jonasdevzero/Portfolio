import React from 'react'
import Head from 'next/head'

import { Header } from '../components'

import {
    Container,
    Content,
    Inner,
    Card,
    ImageContainer,
    Image,
    Info,
    Title,
    Text,
    Button
} from '../styles/pages/About'

import profile from '../assets/img1.jpg'

function About() {
    return (
        <div>
            <Head>
                <title>Jonas - About</title>
            </Head>

            <Container>
                <Header />

                <Content>
                    <Inner>
                        <Card>
                            <ImageContainer>
                                <Image src={profile} />
                            </ImageContainer>

                            <Info>
                                <Title>Jonas de Oliveira</Title>

                                <Text>
                                    Hello, I am 17 years old and I love programming and I discovered this passion after 
                                    seeing a little of this wonderful world that is programming and making my first hello 
                                    world. I've been studying web programming for a few months, using javascript programming 
                                    language on the frontend with Reactjs and the backend with nodejs.
                                </Text>

                                <Button>See my skills</Button>
                            </Info>
                        </Card>
                    </Inner>
                </Content>
            </Container>
        </div>
    )
}

export default About
