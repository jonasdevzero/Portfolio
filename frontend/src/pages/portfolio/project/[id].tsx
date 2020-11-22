import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../../services/api'

import { Header, LanguageSelect } from '../../../components'

interface IProject {
  id: number;
  name: string;
  description: string;
  banner_image: string;
  source_link: string;
  about_link: string;
  images: Array<{
    id: number;
    path: string;
  }>
}

function Portfolio() {
  const router = useRouter()
  const { id } = router.query;

  const [project, setProject] = useState<IProject>()
  
  useEffect(() => {
    api.get(`/projects/${id}`).then(({ data }) => setProject(data.project))
  }, [id])

  return (
    <div>
      <Head>
        <title>Project</title>
      </Head>

      <div>
        <Header local='portfolio'/>
        <LanguageSelect to='/projeto' />
      </div>
    </div>
  )
}

export default Portfolio
