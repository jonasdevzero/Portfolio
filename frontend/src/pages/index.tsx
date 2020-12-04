import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'

import {
  Header,
  Button,
  LanguageSelect
} from '../components'

import {
  Container,
} from '../styles/pages/Global'

import {
  Wrapper,
  Content,
  Inner,
  Info,
  Title,
  TextG,
  TextP,
  Social
} from '../styles/pages/Home'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Home() {
  useEffect(() => Aos.init({ duration: 2000 }), [])

  return (
    <Wrapper>
      <Head>
        <meta name='description' content='jonasdevzero portfolio website' />
        <title>Jonasdevzero</title>
      </Head>

      <Container>
        <Header location='home' language='en' />

        <Content data-aos='fade'>
          <Inner>
            <Info>
              <TextP>Hello,</TextP>
              <TextG>I'm Jonas</TextG>
              <Title>A self-taught web programming.</Title>

              <Button to='/about' marginTop='3rem'>Know more</Button>
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

        <LanguageSelect location='/' language='en' />
      </Container>
    </Wrapper>
  )
}
