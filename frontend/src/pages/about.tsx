import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import api from '../services/api'

import {
    Header,
    Button,
    LanguageSelect
} from '../components'

import {
    Container,
    Main,
    Inner,
    Content,
    ImageContainer,
    Image,
    Info,
    Title,
    Text,
    ButtonContainer,
    SkillsWrapper,
    SkillsContainer,
    SkillsDescription,
    Skills,
    SkillCard,
    SkillImage,

    KnowledgeCard
} from '../styles/pages/About'
import CloseIcon from '@material-ui/icons/Close'

interface IKnowledge {
    id: number;
    name: string;
    description: string;
    type: string;
    image_url: string;
    about_link: string;
};

function About() {
    const [knowledge, setKnowledge] = useState<IKnowledge[]>()
    const [showKnowledge, setShowKnowledge] = useState(false)
    const [selectedKnowledge, setSelectedKnowledge] = useState<IKnowledge>()

    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])

    useEffect(() => {
        api.get('/knowledge?lg=en').then(({ data }) => setKnowledge(data.knowledge))
    }, [])

    function onClickKnowledge(show: boolean, knowledge?: IKnowledge) {
        setShowKnowledge(show)
        if (knowledge) setSelectedKnowledge(knowledge) 
    }

    return (
        <div>
            <Head>
                <title>Jonas - About</title>
            </Head>

            <Container>
                <Header local='about' />

                <Main>
                    <Inner>

                        <Content data-aos='fade-up'>
                            <ImageContainer>
                                <Image src='/developer.jpg' />
                            </ImageContainer>

                            <Info>
                                <Title>Jonas de Oliveira</Title>
                                <Text>
                                    I'm {(2003 - new Date().getFullYear()).toString().split('-')[1]} years
                                    old and I love coding. I discovered this passion after seeing a
                                    little bit of this wonderful programming world and making my first "hello world".
                                    I've been studying web development for a few months using JavaScript and ReactJS on
                                    the front end and Node.js on the back end.
                                </Text>


                                <ButtonContainer>
                                    <Button to='/portfolio'>
                                        My Projects
                                    </Button>
                                </ButtonContainer>
                            </Info>
                        </Content>

                        <Content data-aos='fade-up'>
                            <SkillsWrapper>

                                <SkillsContainer>
                                    <SkillsDescription>
                                        <Title>My Skills</Title>
                                        <p>Here are my skills that i study and use the most</p>
                                    </SkillsDescription>

                                    <Skills>
                                        {knowledge?.map(knowledge => (
                                            knowledge.type === 'technology' ?
                                                (
                                                    <SkillCard key={knowledge.id} onClick={() => onClickKnowledge(true, knowledge)}>
                                                        <SkillImage
                                                            src={knowledge.image_url}
                                                            alt={knowledge.name}
                                                        />
                                                    </SkillCard>
                                                ) : null
                                        ))}
                                    </Skills>
                                </SkillsContainer>

                                <SkillsContainer className="reverse">
                                    <SkillsDescription>
                                        <Title>Tools</Title>
                                        <p>These are the tools that I use to develop</p>
                                    </SkillsDescription>
                                    <Skills>
                                        {knowledge?.map(knowledge => (
                                            knowledge.type === 'tool' ? (
                                                <SkillCard key={knowledge.id} onClick={() => onClickKnowledge(true, knowledge)}>
                                                    <SkillImage
                                                        src={knowledge.image_url}
                                                        alt={knowledge.name}
                                                    />
                                                </SkillCard>
                                            ) : null
                                        ))}
                                    </Skills>
                                </SkillsContainer>
                            </SkillsWrapper>
                        </Content>
                    </Inner>
                </Main>

                <KnowledgeCard className={showKnowledge && 'show'}>
                    <CloseIcon onClick={() => onClickKnowledge(false)} />

                    <div>
                        <img src={selectedKnowledge?.image_url} alt={selectedKnowledge?.name} />
                        <h1>{selectedKnowledge?.name}</h1>
                    </div>
                    <p>{selectedKnowledge?.description}</p>
                    <a href={selectedKnowledge?.about_link} rel="noopener noreferrer" target="_blank">
                        Know more
                    </a>
                </KnowledgeCard>

                <LanguageSelect to='/sobre' />
            </Container>
        </div>
    )
}

export default About
