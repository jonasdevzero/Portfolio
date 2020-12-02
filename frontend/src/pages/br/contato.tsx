import Head from 'next/head'

import { Header, LanguageSelect } from '../../components'

import {
  Container,
  Content,
  Inner,
  ContactContainer,
  Info
} from '../../styles/pages/Contact'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function Contact() {
  return (
    <div>
      <Head>
        <meta name='description' content='contato de um desenvolvedor web, construção de sites modernos e responsivos,
        análises de códigos JavaScript, e muito mais' />
        <title>Desenvolvedor web</title>
      </Head>

      <Container>
        <Header local='contact' />

        <Content>
          <Inner>
            <ContactContainer>
              <img src="/images/contact.jpg" alt="image" />

              <Info>
                <h1>Contato</h1>

                <p>
                  Eu espero que você tenha gostado do meu portfolio, se você 
                  estiver interessado em minhas habilidades ou quer apenas trocar um papo,
                  só me chamar, ficarei feliz em repondê lo.
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

        <LanguageSelect to='/contact' language='en' />
      </Container>
    </div>
  )
}

export default Contact
