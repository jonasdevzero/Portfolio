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

    api.get(`/projects?language=en&limit=2&page=${page ? page : 1}`).then(({ data }) => {
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
        <Header local='portfolio' language='en' />

        <Main>
          <Inner>

            <InfoContainer>
              <img src="/images/coding.jpeg" alt="portfolio banner" />

              <InfoDetails>
                <div>
                  <h1>My Projects</h1>

                  <p>
                    This page contains all my projects that I have already put on the web,
                    some of them are clones of big companies, others are bootcamps projects
                    and more I will soon post more projects of my own.
                </p>
                </div>

                <Button to='/contact'>Contact me</Button>
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

            <Pagination arrowBack={Number(page) > 1 ? 'show' : ''} arrowFoward={Number(page) < pages.length ? 'show' : ''}>
              {Number(page) > 1 ? (
                <Link href={`/portfolio?page=${Number(page) - 1}`}>
                  <ArrowBackIcon className='back' />
                </Link>
              ) : null}


              {pages?.map((_, i) => {
                const currentPage = page ? Number(page) : 1

                // if the page is the first, show it as and two links later
                if (currentPage === 1 && i < 3) {
                  return (
                    <Link key={i} href={`/portfolio?page=${i + 1}`}>
                      <StyledLink selected={page ? Number(page) === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                    </Link>
                  )
                } // if the page is the last one, show it as and two links before
                else if (currentPage === pages.length && i + 1 > pages.length - 3) {
                  return (
                    <Link key={i} href={`/portfolio?page=${i + 1}`}>
                      <StyledLink selected={page ? Number(page) === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                    </Link>
                  )
                } else { // if page is not the first or the last      
                  if (i === 0 && currentPage > 2) { // if the page is longer than two, show the link to page 1 in the first iteration
                    return (
                      <>
                        <Link key={i} href={`/portfolio?page=1`}>
                          <StyledLink selected={page ? Number(page) === i + 1 : 1 === i + 1}>1</StyledLink>
                        </Link>
                        <p>...</p>
                      </>
                    )
                  }
                  // if the page is greater than 1 and less than the total number of pages, show the link of the chosen page and a link on each side
                  if (currentPage - 1 === i + 1 || currentPage === i + 1 || currentPage + 1 === i + 1 && currentPage > 1) {
                    return (
                      <Link key={i} href={`/portfolio?page=${i + 1}`}>
                        <StyledLink selected={page ? Number(page) === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                      </Link>
                    )
                  }
                  // if the page is not the last two, show the link to the last page
                  if (currentPage <= pages.length - 2 && i + 1 === pages.length) {
                    return (
                      <>
                        <p>...</p>
                        <Link key={i} href={`/portfolio?page=${i + 1}`}>
                          <StyledLink selected={page ? Number(page) === i + 1 : 1 === i + 1}>{pages.length}</StyledLink>
                        </Link>
                      </>
                    )
                  }
                }
              })}

              {Number(page) < pages.length ? (
                <Link href={`/portfolio?page=${Number(page) + 1}`}>
                  <ArrowForwardIcon className='foward' />
                </Link>
              ) : null}
            </Pagination>
          </Inner>
        </Main>

        <Loading loading={loading} />

        <LanguageSelect to='/br/portfolio' />
      </Container>
    </div >
  )
}

export default Portfolio
