import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'

import {
  Header,
  Button,
  LanguageSelect
} from '../../components'

import {
  Container
} from '../../styles/pages/Global'

import {
  Wrapper,
  Content,
  Inner,
  Info,
  Title,
  TextP,
  TextG,
  Social
} from '../../styles/pages/Home'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function HomeBr() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Wrapper>
      <Head>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='portfolio de jonasdevzero' />
        <title>Jonasdevzero</title>
      </Head>

      <Container>
        <Header location='home' language='br' />

        <Content data-aos='fade'>
          <Inner>
            <Info >
              <TextP>Olá,</TextP>
              <TextG>Eu sou Jonas</TextG>
              <Title>Um autodiata em programação para web.</Title>

              <Button to='/br/about' marginTop='3rem'>Saiba mais</Button>
            </Info>

            <Social>
              <a href="https://www.linkedin.com/in/jonasdevzero" rel="noopener noreferrer external nofollow" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/jonasdevzero" rel="noopener noreferrer external nofollow" target="_blank">
                <GitHubIcon />
              </a>
            </Social>
          </Inner>
        </Content>

        <LanguageSelect location='/' language='br' />
      </Container>
    </Wrapper>
  );
};

export default HomeBr;