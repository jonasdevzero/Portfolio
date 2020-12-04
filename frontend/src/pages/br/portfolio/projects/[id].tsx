import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../../../services/api'
import Aos from 'aos'

import {
  Header,
  Loading,
  Slider
} from '../../../../components'

import {
  Container,
  Title,
  Subtitle,
  Text,
  StyledLink,
} from '../../../../styles/pages/Global'

import {
  Content,
  SlideContainer,
  InfoContainer,
  Info,
} from '../../../../styles/pages/projects'

interface IProject {
  id: number;
  name: string;
  description: string;
  objective: string;
  difficulties: string;
  acquirements: string;
  code_link: string;
  website_link: string;
}
interface IProjectImages {
  url: string
}

function Portfolio() {
  const { query } = useRouter()
  const { id } = query;

  const [project, setProject] = useState<IProject>()
  const [projectImages, setProjectImages] = useState<IProjectImages[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      api.get(`/projects/${id}`).then(({ data }) => {
        setProject(data.project)

        const images: Array<{ url: string }> = []
        images.push({ url: data.project.banner_image })
        data.project.images.map((image: { path: string }) => images.push({ url: image.path }))
        setProjectImages(images)

        setLoading(false)
      })
    }

    Aos.init({ duration: 800 })
  }, [id])

  function createImages(image: IProjectImages, i: number) {
    const findVideo = new RegExp('https?.*?\.mp4')

    if (findVideo.test(image.url)) {
      return (
        <video key={i} width='100%' height='100%' autoPlay controls loop>
          <source src={image.url} />
        </video>
      )
    }

    return (
      <img key={i} src={image.url} alt="project image" />
    )
  }

  return (
    <div>
      <Head>
        <meta name='description' content={project?.description} />
        <title>jonasdevzero - {project?.name}</title>
      </Head>

      <Container>
        <Header location='portfolio' language='br' />

        <Content>
          <SlideContainer>
            <Slider>
              {projectImages?.map(createImages)}
            </Slider>
          </SlideContainer>

          <InfoContainer data-aos='fade-up'>
            <Info>
              <Title>{project?.name}</Title>
              <Text>{project?.description}</Text>

              <div>
                <StyledLink href={project?.website_link} rel="noopener noreferrer" target="_blank">
                  Website link
                </StyledLink>
                <StyledLink href={project?.code_link} rel="noopener noreferrer" target="_blank">
                  Source Code
                </StyledLink>
              </div>
            </Info>

            <Info>
              <Subtitle>Objetivo</Subtitle>
              <Text>{project?.objective}</Text>
            </Info>

            <Info>
              <Subtitle>Dificuldades</Subtitle>
              <Text>{project?.difficulties}</Text>
            </Info>

            <Info>
              <Subtitle>Conhecimentos adquiridos</Subtitle>
              <Text>{project?.acquirements}</Text>
            </Info>
          </InfoContainer>

        </Content>


        <Loading loading={loading} />
      </Container>
    </div>
  )
}

export default Portfolio
