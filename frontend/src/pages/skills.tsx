import Head from 'next/head';

import { Header } from '../components';

import {
    Container,
    Content,
    Inner
} from '../styles/pages/Skills';

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
                        <h1>Skills</h1>
                    </Inner>
                </Content>
            </Container>
        </div>
    )
}

export default skills
