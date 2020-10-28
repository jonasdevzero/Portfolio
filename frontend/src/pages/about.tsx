import React from 'react'
import Head from 'next/head'

import { Header } from '../components'

import {
    Container,
    Content,
    Inner
} from '../styles/pages/About'

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
                        <h1>About</h1>
                    </Inner>
                </Content>
            </Container>
        </div>
    )
}

export default About
