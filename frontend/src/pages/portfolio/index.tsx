import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import api from '../../services/api'
import Aos from 'aos'

import { Header, LanguageSelect, Loading, Button } from '../../components'

import {
  Container,
  Main,
  Inner,
  Pagination,
  StyledLink,

  InfoContainer,
  InfoDetails,

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
        <title>Jonas - Portfolio</title>
      </Head>

      <Container>
        <Header local='portfolio' />

        <Main>
          <Inner>

            <InfoContainer>
              <img src="/images/coding.jpeg" alt="" />

              <InfoDetails>
                <h1>My Projects</h1>

                <p>
                  This page contains all my projects that I have already put on the web,
                  some of them are clones of big companies, others are bootcamps projects
                  and more I will soon post more projects of my own.
                </p>

                <Button to='/contact'>Contact me</Button>
              </InfoDetails>
            </InfoContainer>

            <ProjectContainer>
              {projects?.map(project => (
                <Project key={project.id} data-aos="fade-up">
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
                        <a href={project.code_link} target='_blank' rel="noopener noreferrer">Source Code</a>
                      </div>
                      <Link href={`/portfolio/projects/${project.id}`}>
                        <ArrowForwardIcon fontSize='large' />
                      </Link>
                    </ProjectLinks>
                  </ProjectDetails>
                </Project>
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
    </div >
  )
}

export default Portfolio
