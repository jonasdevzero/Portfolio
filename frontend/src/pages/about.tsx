import React from 'react'
import Head from 'next/head'

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
    SkillsContainer,
    SkillsDescription,
    Skills,
    SkillCard,
    SkillImage
} from '../styles/pages/About'

import skillsData from '../assets/skills.json'

function About() {
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

                        <Content data-aos='slide-up'>
                            <SkillsContainer>

                                <SkillsDescription>
                                    <Title>My Skills</Title>
                                </SkillsDescription>

                                <Skills>
                                    {skillsData.skills.map(skill => (
                                        <SkillCard key={skill.id}>
                                            <SkillImage
                                                src={skill.image_url}
                                                alt={skill.name}
                                            />
                                        </SkillCard>
                                    ))}
                                </Skills>
                            </SkillsContainer>
                        </Content>

                    </Inner>
                </Main>

                <LanguageSelect to='/sobre' />
            </Container>
        </div>
    )
}

export default About
