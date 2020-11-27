import Head from 'next/head'

import { Header, LanguageSelect } from '../components'

import {
  Container,
  Content,
  Inner,
} from '../styles/pages/Contact'

function skills() {
  return (
    <div>
      <Head>
        <title>Jonas - Contact</title>
      </Head>

      <Container>
        <Header local='contact' language='en' />

        <Content>
          <Inner>
            <h1>Contact, more soon...</h1>
          </Inner>
        </Content>

        <LanguageSelect to='/br/contato' />
      </Container>
    </div>
  )
}

export default skills
