import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../../services/api'
import { Header, Loading, LanguageSelect, Slider } from '../../../components'

import {
  Container,
  Content,
  SlideContainer
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      api.get(`/projects/${id}`).then(({ data }) => {
        setProject(data.project)
        
        const images: Array<{url: string}> = []
        images.push({ url: data.project.banner_image })
        images.push({ url: data.project.banner_gif })
        data.project.images.map((image: { path: string }) => images.push({ url: image.path }))
        setProjectImages(images)

        setLoading(false)
      })
    }
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
                  <img key={i} src={image.url} alt="project image"/>
              ))}
            </Slider>
          </SlideContainer>

          <h1>{project?.name}</h1>
        </Content>


        <Loading loading={loading} />

        <LanguageSelect to={`/br/portfolio/projects/${Number(id) + 1}`} />
      </Container>
    </div>
  )
}

export default Portfolio
