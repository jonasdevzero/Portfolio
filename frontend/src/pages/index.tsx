import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Aos from 'aos'

import { Header } from '../components'

import {
  Wrapper,
  Container,
  Content,
  Inner,
  Info,
  Title,
  Subtitle,
  Text,
  StyledLink,
  Social
} from '../styles/pages/Home'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <Wrapper>
      <Head>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='portfolio of a web developer' />
        <title>Jonas - Home</title>
      </Head>

      <Container>
        <Header local='home' />

        <Content data-aos='fade'>
          <Inner>
            <Info >
              <Subtitle>Hello,</Subtitle>
              <Title>I'm Jonas</Title>
              <Text>A self taught of web programming</Text>

              <Link href='/about'>
                <StyledLink>Know more</StyledLink>
              </Link>
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
      </Container>
    </Wrapper>
  )
}
