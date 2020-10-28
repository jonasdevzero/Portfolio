import React from 'react'
import Head from 'next/head'

import { Header } from '../components'

import {
    Container,
    Content,
    Inner
} from '../styles/pages/Portfolio'

function Portfolio() {
    return (
        <div>
            <Head>
                <title>Jonas - Portfolio</title>
            </Head>

            <Container>
                <Header />

                <Content>
                    <Inner>
                        <h1>Portfolio</h1>
                    </Inner>
                </Content>
            </Container>
        </div>
    )
}

export default Portfolio
