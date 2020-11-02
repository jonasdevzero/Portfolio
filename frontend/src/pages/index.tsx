import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components'

import {
  Container,
  Content,
  Inner,
  Title,
  Subtitle,
  Text,
  StyledLink,
  Social
} from '../styles/pages/Home'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='portfolio of a web developer' />
        <title>Jonas - Home</title>
      </Head>

      <Container>
        <Header local='home' />

        <Content>
          <Inner>
            <Subtitle>Hello,</Subtitle>
            <Title>I'm Jonas</Title>
            <Text>A self taught of web programming</Text>

            <Link href='/about'>
              <StyledLink>Know more</StyledLink>
            </Link>

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
    </div>
  )
}
