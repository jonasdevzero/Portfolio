import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to='/'>
                            <LinkedInIcon />
                        </Link>
                        <Link to='/'>
                            <GitHubIcon />
                        </Link>
                    </Social>
                </Inner>
            </Content>
        </Container>
    );
};

export default Landing;
