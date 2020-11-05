import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Aos from 'aos'

import { Header, PorcentageCircle, Button } from '../components'

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
    Skills,
    SkillsType,
    SkillCard
} from '../styles/pages/About'

function About() {
    const [porcentageAnimation, setPorcentageAnimation] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 110) {
                setPorcentageAnimation(true)
            } else {
                setPorcentageAnimation(false)
            }
        })

        Aos.init({ duration: 1200 })
    }, [])

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
                                    I am {(2003 - new Date().getFullYear()).toString().split('-')[1]} years
                                    old and I love programming and I discovered this passion after
                                    seeing a little of this wonderful world that is programming and making my first hello
                                    world. I've been studying web programming for a few months, using javascript programming
                                    language on the frontend with Reactjs and the backend with nodejs.
                                </Text>

                                
                                <ButtonContainer>
                                    <Button to='/portfolio'>
                                        My Projects
                                    </Button>
                                </ButtonContainer>
                            </Info>
                        </Content>

                        <Content data-aos='fade-up'>
                            <SkillsContainer>
                                <Title>Skills</Title>

                                <Skills>
                                    <SkillsType>
                                        <Text>Frontend</Text>
                                        <div>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={89} text='JS' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={87} text='Html' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={84} text='Css' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={88} text='React' animate={porcentageAnimation} />
                                            </SkillCard>
                                        </div>
                                    </SkillsType>

                                    <SkillsType>
                                        <Text>Backend</Text>
                                        <div>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={86} text='Node' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={84} text='Express' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={82} text='mongoDB' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={80} text='PSQL' animate={porcentageAnimation} />
                                            </SkillCard>
                                            <SkillCard>
                                                <PorcentageCircle porcentage={78} text='Insomnia' animate={porcentageAnimation} />
                                            </SkillCard>
                                        </div>
                                    </SkillsType>
                                </Skills>
                            </SkillsContainer>
                        </Content>
                    </Inner>
                </Main>
            </Container>
        </div>
    )
}

export default About
