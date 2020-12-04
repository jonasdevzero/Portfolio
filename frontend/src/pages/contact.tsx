import Head from 'next/head'

import { Header, LanguageSelect } from '../components'

import {
  Container,
  Content,
  Inner,
  ContactContainer,
  Info
} from '../styles/pages/Contact'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function Contact() {
  return (
    <div>
      <Head>
        <meta name='description' content='contact of jonasdevzero' />
        <title>Jonasdevzero - Contact</title>
      </Head>

      <Container>
        <Header location='contact' language='en' />

        <Content>
          <Inner>
            <ContactContainer>
              <img src="/images/contact.jpg" alt="image" />

              <Info>
                <h1>Contact</h1>

                <p>
                  I hope you liked my portfolio, if you are interested in my skills
                  or want to chat, just contact me, I will be happy to talk to you.
                </p>

                <div>
                  <h2>Email -</h2>
                  <a href="mailto:jonasdevzero@gmail.com" rel='noopener noreferrer external nofollow'>
                    jonasdevzero@gmail.com
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/jonasdevzero" rel="noopener noreferrer external nofollow" target="_blank">
                    <LinkedInIcon />
                  </a>
                  <a href="https://github.com/jonasdevzero" rel="noopener noreferrer external nofollow" target="_blank">
                    <GitHubIcon />
                  </a>
                </div>
              </Info>
            </ContactContainer>
          </Inner>
        </Content>

        <LanguageSelect location='/contact' language='en' />
      </Container>
    </div>
  )
}

export default Contact
