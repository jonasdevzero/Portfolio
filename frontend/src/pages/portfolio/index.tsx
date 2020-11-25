import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import api from '../../services/api'

import { Header, LanguageSelect, Loading } from '../../components'

import {
  Container,
  Main,
  Inner,
  ProjectContainer,
  ProjectInfo,
  Project,
  ProjectBanner,
  Pagination,
  StyledLink
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
  const { query } = useRouter()
  const page = query.page

  const [projects, setProjects] = useState<IProjects[]>()
  const [loading, setLoading] = useState(true)

  const [pages, setPages] = useState([])

  useEffect(() => {
    setLoading(true)

    api.get(`/projects?language=en&limit=6&page=${page ? page : 1}`).then(({ data }) => {
      setProjects(data.project)

      if (!pages.length) {
        setPages(Array(data.info.pages).fill(' '))
      }

      setLoading(false)
    })
  }, [page])

  return (
    <div>
      <Head>
        <title>Jonas - Portfolio</title>
      </Head>

      <Container>
        <Header local='portfolio' />

        <Main>
          <Inner>
            <ProjectContainer>
              {projects?.map((project, i) => (
                <Link key={project.id} href={`/portfolio/projects/${project.id}`}>
                  <Project >
                    <ProjectBanner img={project.banner_image} gif={project.banner_gif} />
                    <ProjectInfo>
                      <h1>{project.name}</h1>
                      <h2>{project.description}</h2>
                    </ProjectInfo>
                  </Project>
                </Link>
              ))}
            </ProjectContainer>
            <Pagination>
              {pages?.map((_, i) => (
                <Link key={i} href={`/portfolio?page=${i + 1}`}>
                  <StyledLink selected={page ? Number(page) === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                </Link>
              ))}
            </Pagination>
          </Inner>
        </Main>

        <Loading loading={loading} />

        <LanguageSelect to='/portfolio' />
      </Container>
    </div>
  )
}

export default Portfolio
