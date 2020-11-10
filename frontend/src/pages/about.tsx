import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Aos from 'aos'

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
    Skills,
    SkillCard,
    SkillImage
} from '../styles/pages/About'

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

                        <Content data-aos='fade'>
                            <SkillsContainer>
                                <Title>Skills and Tools</Title>

                                <Skills>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/js.svg"
                                            alt="javascript"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/typescript.svg"
                                            alt="javascript"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/html.svg"
                                            alt="html"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/css.svg"
                                            alt="css"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/react.svg"
                                            alt="react js"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/node.svg"
                                            alt="node.js"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/express.svg"
                                            alt="express"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/mongodb.svg"
                                            alt="mongo database"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/postgresql.svg"
                                            alt="postgresql"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/vscode.svg"
                                            alt="postgresql"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/git.svg"
                                            alt="postgresql"
                                        />
                                    </SkillCard>

                                    <SkillCard>
                                        <SkillImage
                                            size='8rem'
                                            src="https://raw.githubusercontent.com/jonasdevzero/Media-Hub/master/icons/github.svg"
                                            alt="postgresql"
                                        />
                                    </SkillCard>

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
