import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import api from '../../services/api'

import { Header, LanguageSelect, Loading } from '../../components'

import {
  Container,
  Content,
  Inner
} from '../../styles/pages/Portfolio'

interface IProjects {
  id: number;
  name: string;
  description: string;
  objective: string;
  difficulties: string;
  acquirements: string;
  banner_image: string;
  banner_gif: string;
  code_link: string;
  website_link: string;
  images: Array<{
    id: number;
    path: string;
  }>
}

function Portfolio() {
  const [projects, setProjects] = useState<IProjects[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/projects?lg=en').then(({ data }) => {
      setProjects(data.project)
      setLoading(false)
    })
  }, [])

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

        <Loading loading={loading} />

        <LanguageSelect to='/portfolio' />
      </Container>
    </div>
  )
}

export default Portfolio
