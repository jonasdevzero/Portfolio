import { useState, useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import api from '../services/api'
import calculateAge from '../helpers/calculateAge'

import { Header, Button, LanguageSelect, Loading } from '../components'

import {
  Container,
  Main,
  Inner,
  Content,
  ImageContainer,
  InfoContainer,
  Title,
  Text,
  KnowledgeContainer,
  KnowledgeType,
  KnowledgeDescription,
  KnowledgeWrapper,
  Knowledge,
  KnowledgeDropUp,
} from '../styles/pages/About'
import CloseIcon from '@material-ui/icons/Close'

interface IKnowledge {
  id: number
  name: string
  description: string
  type: string
  image_url: string
  about_link: string
}

function About() {
  const [knowledge, setKnowledge] = useState<IKnowledge[]>()
  const [showKnowledge, setShowKnowledge] = useState(false)
  const [selectedKnowledge, setSelectedKnowledge] = useState<IKnowledge>()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 800 })
    api.get('/knowledge?language=en').then(({ data }) => {
      setKnowledge(data.knowledge)
      setLoading(false)
    })
  }, [])

  function onClickKnowledge(show: boolean, knowledge?: IKnowledge) {
    setShowKnowledge(show)
    if (knowledge) setSelectedKnowledge(knowledge)
  }

  return (
    <div>
      <Head>
        <meta name='description' content='these are the skills of a web developer that uses javascript 
        and typescript in the frontend and backend' />
        <title>Skills of a web developer</title>
      </Head>

      <Container>
        <Header local="about" language='en' />
        <Main>
          <Inner>
            <Content data-aos="fade-up">
              <ImageContainer>
                <img src="/images/developer.png" />
              </ImageContainer>

              <InfoContainer>
                <Title>Jonas de Oliveira</Title>
                <Text>
                    I'm {calculateAge('03/05/2003')}{' '}
                    years old and I love coding. I discovered this passion after
                    seeing a little bit of this wonderful programming world and
                    making my first "hello world". I've been studying web
                    development for a few months using JavaScript and ReactJS on
                    the front end and Node.js on the back end.
                  </Text>
                <div>
                  <Button to="/portfolio">My Projects</Button>
                </div>
              </InfoContainer>
            </Content>

            <Content data-aos="fade-up">
              <KnowledgeContainer>
                <KnowledgeType>
                  <KnowledgeDescription>
                    <Title>My Skills</Title>
                    <Text>
                      Here are my skills that i study and use the most
                    </Text>
                  </KnowledgeDescription>

                  <KnowledgeWrapper>
                    {knowledge?.map((knowledge) =>
                      knowledge.type === 'technology' ? (
                        <Knowledge
                          key={knowledge.id}
                          onClick={() => onClickKnowledge(true, knowledge)}
                        >
                          <img src={knowledge.image_url} alt={knowledge.name} />
                        </Knowledge>
                      ) : null
                    )}
                  </KnowledgeWrapper>
                </KnowledgeType>

                <KnowledgeType className="reverse">
                  <KnowledgeDescription>
                    <Title>Tools</Title>
                    <Text>These are the tools that I use to develop</Text>
                  </KnowledgeDescription>

                  <KnowledgeWrapper>
                    {knowledge?.map((knowledge) =>
                      knowledge.type === 'tool' ? (
                        <Knowledge
                          key={knowledge.id}
                          onClick={() => onClickKnowledge(true, knowledge)}
                        >
                          <img src={knowledge.image_url} alt={knowledge.name} />
                        </Knowledge>
                      ) : null
                    )}
                  </KnowledgeWrapper>
                </KnowledgeType>

              </KnowledgeContainer>
            </Content>
          </Inner>
        </Main>

        <Loading loading={loading} />

        <KnowledgeDropUp className={showKnowledge && 'show'}>
          <CloseIcon onClick={() => onClickKnowledge(false)} />

          <div>
            <img
              src={selectedKnowledge?.image_url}
              alt={selectedKnowledge?.name}
            />
            <Title>{selectedKnowledge?.name}</Title>
          </div>
          <Text>{selectedKnowledge?.description}</Text>
          <a
            href={selectedKnowledge?.about_link}
            rel="noopener noreferrer external nofollow"
            target="_blank"
          >
            Know more
              </a>
        </KnowledgeDropUp>

        <LanguageSelect to="/br/sobre" />
      </Container>
    </div>
  )
}

export default About
