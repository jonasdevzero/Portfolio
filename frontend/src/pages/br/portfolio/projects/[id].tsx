import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../../../services/api'
import Aos from 'aos'

import { Header, Loading, LanguageSelect, Slider } from '../../../../components'

import {
  Container,
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
        images.push({ url: data.project.banner_gif })
        data.project.images.map((image: { path: string }) => images.push({ url: image.path }))
        setProjectImages(images)

        setLoading(false)
      })
    }

    Aos.init({ duration: 800 })
  }, [id])

  return (
    <div>
      <Head>
        <title>jonas - Project</title>
      </Head>

      <Container>
        <Header local='portfolio' language='en' />

        <Content>
          <SlideContainer>
            <Slider>
              {projectImages?.map((image, i) => (
                <img key={i} src={image.url} alt="project image" />
              ))}
            </Slider>
          </SlideContainer>

          <InfoContainer data-aos='fade-up'>
            <Info>
              <h1>{project?.name}</h1>
              <p>{project?.description}</p>

              <div>
                <a href={project?.website_link} rel="noopener noreferrer" target="_blank">Website link</a>
                <a href={project?.code_link} rel="noopener noreferrer" target="_blank">Source Code</a>
              </div>
            </Info>

            <Info>
              <h2>Objective</h2>
              <p>{project?.objective}</p>
            </Info>

            <Info>
              <h2>Difficulties</h2>
              <p>{project?.difficulties}</p>
            </Info>

            <Info>
              <h2>Acquirements</h2>
              <p>{project?.acquirements}</p>
            </Info>
          </InfoContainer>

        </Content>


        <Loading loading={loading} />

        <LanguageSelect to={`/portfolio/projects/${Number(id) - 1}`} language='en' />
      </Container>
    </div>
  )
}

export default Portfolio
