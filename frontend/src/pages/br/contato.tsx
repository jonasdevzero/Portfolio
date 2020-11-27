import Head from 'next/head'

import { Header, LanguageSelect } from '../../components'

import {
  Container,
  Content,
  Inner,
} from '../../styles/pages/Contact'

function skills() {
  return (
    <div>
      <Head>
        <title>Jonas - Contato</title>
      </Head>

      <Container>
        <Header local='contact' />

        <Content>
          <Inner>
            <h1>Contato, em breve...</h1>
          </Inner>
        </Content>

        <LanguageSelect to='/contact' language='en' />
      </Container>
    </div>
  )
}

export default skills
