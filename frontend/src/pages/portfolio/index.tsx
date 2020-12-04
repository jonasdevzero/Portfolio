import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import api from '../../services/api'
import Aos from 'aos'

import {
  Header,
  LanguageSelect,
  Loading,
  Button,
  Pagination
} from '../../components'

import {
  Container,
  Main,
  Title,
  Subtitle,
  Text,
  StyledLink,
  BoxContainer,
  BoxInfo,
} from '../../styles/pages/Global'

import {
  ProjectContainer,
  Project,
  ProjectBanner,
  ProjectDetails,
  ProjectLinks,
} from '../../styles/pages/Portfolio'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

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

    api.get(`/projects?language=en&limit=5&page=${page ? page : 1}`).then(({ data }) => {
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
        <meta name='description' content='Projects of jonasdevzero' />
        <title>Jonasdevzero - Projects</title>
      </Head>

      <Container>
        <Header location='portfolio' language='en' />

        <Main>

          <BoxContainer>
            <img src="/images/coding.jpeg" alt="banner" />

            <BoxInfo>
              <div>
                <Title>My Projects</Title>

                <Text>
                  This page contains all my projects that I have already put on the web,
                  some of them are clones of big companies, others are bootcamps projects
                  and more I will soon post more projects of my own.
                </Text>
              </div>

              <Button to='/contact'>Contact me</Button>
            </BoxInfo>
          </BoxContainer>

          <ProjectContainer>
            {projects?.map(project => (
              <Project key={project.id} data-aos="fade-up">

                <Link href={`/portfolio/projects/${project.id}`}>
                  <ProjectBanner image={project.banner_image} gif={project.banner_gif} />
                </Link>

                <ProjectDetails>
                  <div>
                    <Subtitle>{project.name}</Subtitle>
                    <Text>{project.description}</Text>
                  </div>

                  <ProjectLinks>
                    <div>
                      <StyledLink href={project.website_link} target='_blank' rel="noopener noreferrer external nofollow">
                        Website
                      </StyledLink>

                      <StyledLink href={project.code_link} target='_blank' rel="noopener noreferrer external nofollow">
                        Source Code
                      </StyledLink>
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
        </Main>

        <Loading loading={loading} />

        <LanguageSelect location='/portfolio' language='en' />
      </Container>
    </div >
  )
}

export default Portfolio
