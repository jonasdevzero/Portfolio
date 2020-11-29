import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import api from '../../../services/api'
import Aos from 'aos'

import { Header, LanguageSelect, Loading, Button, Pagination } from '../../../components'

import {
  Container,
  Main,
  Inner,
  InfoContainer,
  InfoDetails,
  ProjectContainer,
  Project,
  ProjectBanner,
  ProjectDetails,
  ProjectLinks,
} from '../../../styles/pages/Portfolio'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'

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
    Aos.init({ duration: 800 })
    setLoading(true)

    api.get(`/projects?language=br&limit=5&page=${page ? page : 1}`).then(({ data }) => {
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

            <InfoContainer>
              <img src="/images/coding.jpeg" alt="portfolio banner" />

              <InfoDetails>
                <div>
                  <h1>Meus Projetos</h1>

                  <p>
                    Esta página contém todos os meus projetos que coloquei na web,
                    alguns são clones de grandes companhias, outros projetos de bootcamp
                    e em breve colocarei projetos de minha autoria.
                </p>
                </div>

                <Button to='/br/contato'>Fale comigo</Button>
              </InfoDetails>
            </InfoContainer>

            <ProjectContainer data-aos="fade-up">
              {projects?.map(project => (
                <Project key={project.id}>
                  <Link href={`/portfolio/projects/${project.id}`}>
                    <ProjectBanner image={project.banner_image} gif={project.banner_gif} />
                  </Link>

                  <ProjectDetails>
                    <div>
                      <h1>{project.name}</h1>
                      <p>{project.description}</p>
                    </div>

                    <ProjectLinks>
                      <div>
                        <a href={project.website_link} target='_blank' rel="noopener noreferrer">Website</a>
                        <a href={project.code_link} target='_blank' rel="noopener noreferrer">Código fonte</a>
                      </div>
                      <Link href={`/portfolio/projects/${project.id}`}>
                        <ArrowForwardIcon fontSize='large' />
                      </Link>
                    </ProjectLinks>
                  </ProjectDetails>
                </Project>
              ))}
            </ProjectContainer>

            <Pagination pages={pages} page={page ? Number(page) : 1} />
          </Inner>
        </Main>

        <Loading loading={loading} />

        <LanguageSelect to='/portfolio' language='en' />
      </Container>
    </div >
  )
}

export default Portfolio
