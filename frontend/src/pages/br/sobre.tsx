import { useState, useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import api from '../../services/api'
import calculateAge from '../../helpers/calculateAge'

import { Header, Button, LanguageSelect, Loading } from '../../components'

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
} from '../../styles/pages/About'
import CloseIcon from '@material-ui/icons/Close'

interface IKnowledge {
  id: number
  name: string
  description: string
  type: string
  image_url: string
  about_link: string
}

function Sobre() {
  const [knowledge, setKnowledge] = useState<IKnowledge[]>()
  const [showKnowledge, setShowKnowledge] = useState(false)
  const [selectedKnowledge, setSelectedKnowledge] = useState<IKnowledge>()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 800 })
    api.get('/knowledge?language=br').then(({ data }) => {
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
        <meta name='description' content='Informações sobre jonasdevzero e suas habilidades' />
        <title>Jonasdevzero - Habilidades</title>
      </Head>

      <Container>
        <Header local="about" />
        <Main>
          <Inner>
            <Content data-aos="fade-up">
              <ImageContainer>
                <img src="/images/developer.png" />
              </ImageContainer>

              <InfoContainer>
                <Title>Jonas de Oliveira</Title>
                <Text>
                  Eu tenho {calculateAge('03/05/2003')}{' '}
                  anos de idade e amo programar. Eu descobri essa paixão depois de ver
                  um pouco desse maravilhoso mundo da programação e fazer meu  primeiro
                  "Hello World". Eu tenho estudado programação para web há alguns meses
                  usando javascript e React.js para front end e Node.js para backend.
                </Text>
                <div>
                  <Button to="/br/portfolio">Projetos</Button>
                </div>
              </InfoContainer>
            </Content>

            <Content data-aos="fade-up">
              <KnowledgeContainer>
                <KnowledgeType>
                  <KnowledgeDescription>
                    <Title>Minhas Habilidades</Title>
                    <Text>
                      Aqui estão as ferramentas que eu mais uso e estudo.
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
                    <Title>Ferramentas</Title>
                    <Text>Essas são as ferramentas que eu uso para desenvolver.</Text>
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
            Saiba mais
              </a>
        </KnowledgeDropUp>

        <LanguageSelect to="/about" language='en' />
      </Container>
    </div>
  )
}

export default Sobre;
