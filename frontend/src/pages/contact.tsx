import Head from 'next/head'

import { Header, LanguageSelect } from '../components'

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
                <Header local='contact' />

                <Content>
                    <Inner>
                        <h1>Contac, more soon...</h1>
                    </Inner>
                </Content>

                <LanguageSelect to='/contato' />
            </Container>
        </div>
    )
}

export default skills
