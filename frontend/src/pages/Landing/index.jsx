import React from 'react';

import { Header } from '../../components';

import {
    Container,
    Content,
    Inner,
    Title,
    Subtitle,
    Text,
    Button,
    Social
} from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Landing() {
    return (
        <Container>
            <Header />

            <Content>
                <Inner>
                    <Subtitle>Hello</Subtitle>
                    <Title>I´m Jonas</Title>
                    <Text>A self-taught of web programming</Text>

                    <Button>Know more</Button>

                    <Social>
                        <a href="https://www.linkedin.com/in/jonas-de-oliveira-0561961ab/" rel="noopener noreferrer" target="_blank">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/jonasdevzero" rel="noopener noreferrer" target="_blank">
                            <GitHubIcon />
                        </a>
                    </Social>
                </Inner>
            </Content>
        </Container>
    );
};

export default Landing;
