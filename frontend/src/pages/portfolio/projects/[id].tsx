import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../../services/api'
import Aos from 'aos'

import {
  Header,
  Loading,
  Slider
} from '../../../components'

import {
  Container,
  Title,
  Subtitle,
  Text,
  StyledLink,
} from '../../../styles/pages/Global'

import {
  Content,
  SlideContainer,
  InfoContainer,
  Info,
} from '../../../styles/pages/projects'

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
  const [projectVideo, setProjectVideo] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      api.get(`/projects/${id}`).then(({ data }) => {
        setProject(data.project)

        const findVideo = new RegExp('https?.*?\.mp4')
        const images: Array<{ url: string }> = []
        images.push({ url: data.project.banner_image })

        data.project.images.map((image: { path: string }) => {
          if (!findVideo.test(image.path)) {
            images.push({ url: image.path })
          } else {
            setProjectVideo(image.path)
          }
        })

        setProjectImages(images)
        setLoading(false)
      })
    }

    Aos.init({ duration: 800 })
  }, [id])

  return (
    <div>
      <Head>
        <meta name='description' content={project?.description} />
        <title>Jonasdevzero - {project?.name}</title>
      </Head>

      <Container>
        <Header location='portfolio' language='en' />

        <Content>
          <SlideContainer>
            <Slider>
              {projectImages?.map((image, i) => (
                <img key={i} src={image.url} alt={`${project?.name} image`} />
              ))}
            </Slider>
          </SlideContainer>

          <InfoContainer data-aos='fade-up'>
            <Info>
              <Title>{project?.name}</Title>
              <Text>{project?.description}</Text>

              <div>
                <StyledLink href={project?.website_link} rel="noopener noreferrer external nofollow" target="_blank">
                  Website link
                </StyledLink>
                <StyledLink href={project?.code_link} rel="noopener noreferrer external nofollow" target="_blank">
                  Source Code
                </StyledLink>
              </div>
            </Info>

            <Info>
              <Subtitle>Objective</Subtitle>
              <Text maxWidth='none'>{project?.objective}</Text>
            </Info>

            <Info>
              <Subtitle>Difficulties</Subtitle>
              <Text maxWidth='none'>{project?.difficulties}</Text>
            </Info>

            <Info>
              <Subtitle>Acquired knowledge</Subtitle>
              <Text maxWidth='none'>{project?.acquirements}</Text>
            </Info>

            {projectVideo ? (
              <Info>
                <video src={projectVideo} controls loop></video>
              </Info>
            ) : null}
          </InfoContainer>
        </Content>

        <Loading loading={loading} />
      </Container>
    </div >
  )
}

export default Portfolio
