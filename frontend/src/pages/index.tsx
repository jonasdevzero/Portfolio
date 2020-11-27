import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'

import { Header, Button, LanguageSelect } from '../components'

import {
  Wrapper,
  Container,
  Content,
  Inner,
  Info,
  Title,
  Subtitle,
  Text,
  Social
} from '../styles/pages/Home'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Wrapper>
      <Head>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='portfolio of a web developer' />
        <title>Jonas - Home</title>
      </Head>

      <Container>
        <Header local='home' language='en' />

        <Content data-aos='fade'>
          <Inner>
            <Info >
              <Subtitle>Hello,</Subtitle>
              <Title>I'm Jonas</Title>
              <Text>A self-taught web programming.</Text>

              <Button to='/about' marginTop='3rem'>Know more</Button>
            </Info>

            <Social>
              <a href="https://www.linkedin.com/in/jonasdevzero" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/jonasdevzero" rel="noopener noreferrer" target="_blank">
                <GitHubIcon />
              </a>
            </Social>
          </Inner>
        </Content>

        <LanguageSelect to='/br' />
      </Container>
    </Wrapper>
  )
}
