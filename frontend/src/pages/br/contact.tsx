import Head from 'next/head'

import {
  Header,
  LanguageSelect
} from '../../components'

import {
  Container,
  Main,
  BoxContainer,
  BoxInfo,
  Title,
  Text,
  StyledLink
} from '../../styles/pages/Global'

import {
  Wrapper
} from '../../styles/pages/Contact'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function Contact() {
  return (
    <div>
      <Head>
        <meta name='description' content='contato de jonasdevzero' />
        <title>Jonasdevzero - Contato</title>
      </Head>

      <Container>
        <Header location='contact' language='br' />

        <Main>
          <BoxContainer>
            <img src="/images/contact.jpg" alt="image" />

            <BoxInfo>
              <Title>Contato</Title>

              <Text>
                Eu espero que você tenha gostado do meu portfolio, se você
                estiver interessado em minhas habilidades ou quer apenas trocar um papo,
                só me chamar, ficarei feliz em repondê lo.
              </Text>

              <Wrapper>
                <h2>Email -</h2>
                <StyledLink href="mailto:jonasdevzero@gmail.com" rel='noopener noreferrer external nofollow'>
                  jonasdevzero@gmail.com
                  </StyledLink>
              </Wrapper>
              <Wrapper>
                <a href="https://www.linkedin.com/in/jonasdevzero" rel="noopener noreferrer external nofollow" target="_blank">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/jonasdevzero" rel="noopener noreferrer external nofollow" target="_blank">
                  <GitHubIcon />
                </a>
              </Wrapper>
            </BoxInfo>
          </BoxContainer>
        </Main>

        <LanguageSelect location='/contact' language='br' />
      </Container>
    </div>
  )
}

export default Contact
