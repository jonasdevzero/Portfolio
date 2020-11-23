import Head from 'next/head'

import { Header, LanguageSelect } from '../../components'

import {
  Container,
  Content,
  Inner
} from '../../styles/pages/Portfolio'

function Portfolio() {
  return (
    <div>
      <Head>
        <title>Jonas - Portfolio</title>
      </Head>

      <Container>
        <Header local='portfolio' />

        <Content>
          <Inner>
            <h1>Portfolio, more soon...</h1>
          </Inner>
        </Content>

        <LanguageSelect to='/portfolio' />
      </Container>
    </div>
  )
}

export default Portfolio