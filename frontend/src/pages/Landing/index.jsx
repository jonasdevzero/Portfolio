import React from 'react';

import { Header } from '../../components';

import {
    Container,
    Content
} from './styles';

function Landing() {
    return (
        <Container>
            <Header />

            <Content>
                <div>
                    <h1>Hi.</h1>
                    <h2>My name is Jonas</h2>
                </div>
            </Content>
        </Container>
    );
};

export default Landing;
