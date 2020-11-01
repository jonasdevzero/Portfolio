import Head from 'next/head'

import { Header } from '../components'

import {
    Container,
    Content,
    Inner,
} from '../styles/pages/Contact'

function skills() {
    return (
        <div>
            <Head>
                <title>Jonas - My skills</title>
            </Head>

            <Container>
                <Header />

                <Content>
                    <Inner>
                        <h1>Contac</h1>
                    </Inner>
                </Content>
            </Container>
        </div>
    )
}

export default skills
