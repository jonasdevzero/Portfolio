import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 100rem;
    width: 100%;

    margin-top: 6rem;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
`;

export const Content = styled.section`
    width: 100%;
    margin-top: 6rem;

    display: flex;
    flex: 1;

    @media (max-width: 900px) {
        flex-direction: column;
    };

    @media (max-width: 500px) {
        margin-top: 0;
    };
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: .4;
    height: 40rem;

    @media (max-width: 1080px) {
        flex: .3;
    };

    @media (max-width: 900px) {
        margin-bottom: 2rem;
    };
`;

export const Image = styled.img`
    width: 40rem;
    object-fit: contain;

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        object-fit: none;
    };
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: .6;
    
    height: 40rem;
    padding: 2rem;

    @media (max-width: 1080px) {
        flex: .7;
    };

    @media (max-width: 900px) {
        flex: 1;
        padding: 0 3rem;
        height: 100%;
    };
`;

export const Title = styled.h1`
    font-size: 3.8rem;
    font-weight: 600;
    text-align: start;

    width: 100%;
    margin-bottom: 1.5rem;

    @media (max-width: 930px) {
        font-size: 3rem;
    };
`;

export const SubTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;

    margin-left: 1rem;
`;

export const Text = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.3rem;
    text-align: justify;
    max-width: 50rem;

    margin-bottom: 1rem;

    @media (max-width: 930px) {
        font-size: 1.6rem;
        max-width: none;
    };
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2.5rem;

    @media (max-width: 900px) {
        align-items: center;
        justify-content: center;

        margin: 2.5rem 0;
    };
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #191818;
    padding: 0 5rem 3rem 5rem;
    margin-bottom: 5rem;

    & > h1 {
        margin-top: 2.5rem;
        margin-bottom: 3.5rem;
        text-align: center;
    };

    @media (max-width: 1000px) {
        padding: 0 2rem 0 2rem;
        margin: 3rem;
    };
    @media (max-width: 360px) {
        margin: 0;
        margin-top: 3rem;
        padding: 0 .5rem 0 .5rem;
    };
`;

export const Skills = styled.div`
    display: flex;
    flex: 1;

    @media (max-width: 910px) {
        flex-direction: column;
    };
`;

export const SkillsType = styled.div`
    flex: .5;
    & + & {
        border-left: solid .2rem #FFF; 
    }; 

    p {
        text-align: center;
        margin-bottom: 2rem;

        @media (max-width: 910px) {
            margin: auto;
        };
    };

    & > div {
        display: flex;
        flex-wrap: wrap;
        margin: 0 1rem;

        @media (max-width: 910px) {
            justify-content: center;
            margin: 0;
        };
    };

    @media (max-width: 910px) {
        margin-bottom: 3rem;
        border: none !important;
    };
`;

export const SkillCard = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 1rem;
    margin: .5rem;
    background-color: #333;
    border: solid .1rem transparent;
    border-radius: .3rem;
    cursor: pointer;
    transition: transform .3s ease-in-out;

    &:hover {
        z-index: 1;
        transform: translateY(-.5rem);
        border-color: #FFF;
    };
`;

// min-height: 750px; min-width: 910px --> need responsivity in circle porcentage