import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../../services/api'

import { Header, Loading } from '../../../components'

interface IProject {
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
  const { id } = query;
  
  const [project, setProject] = useState<IProject>()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (id) {
      api.get(`/projects/${id}`).then(({ data }) => {
        setProject(data.project)
        setLoading(false)
      })
    }
  }, [id])

  return (
    <div>
      <Head>
        <title>Project</title>
      </Head>

      <div>
        <Header local='portfolio' language='en' />

        <div>
          <h1>{project?.name}</h1>
          <h2>{project?.description}</h2>
          <p>{project?.objective}</p>
        </div>


        <Loading loading={loading} />
      </div>
    </div>
  )
}

export default Portfolio
