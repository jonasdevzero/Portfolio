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
    flex: .5;
    height: 40rem;

    img {
        width: 100%;
        object-fit: cover;
    };

    @media (max-width: 900px) {
        margin-bottom: 2rem;

        img {
            width: 100%;
            height: auto;
            object-fit: none;
        };
    };
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: .5;
    
    height: 40rem;
    padding: 2rem;

    div {
        display: flex;
        width: 100%;
        margin-top: 2.5rem;
        
        @media (max-width: 900px) {
            align-items: center;
            justify-content: center;

            margin: 2.5rem 0;
        };
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

export const Text = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.3rem;
    text-align: justify;
    max-width: 50rem;

    margin-bottom: 1rem;

    @media (max-width: 930px) {
        max-width: none;
    };
`;

export const ButtonContainer = styled.div`
    
`;

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const KnowledgeType = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #191818;
    padding: 5rem;
    margin-bottom: 4rem;

    &.reverse {
        flex-direction: row-reverse;
    }

    @media (max-width: 1000px) {
        padding: 3rem;
    };
    @media (max-width: 600px) {
        flex-direction: column !important;
        margin-bottom: 0;
        margin-top: .5rem;
    };
    @media (max-width: 360px) {
        padding: 0 .5rem 0 .5rem;
    };
`;

export const KnowledgeDescription = styled.div`
    display: flex;
    flex: .4;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1, p {
        text-align: center;
        max-width: 25rem;
    };

    @media (max-width: 360px) {
        h1 {
            margin-top: 4rem;
        };
    };
`;

export const KnowledgeWrapper = styled.div`
    display: flex;
    flex: .6;
    flex-wrap: wrap;
    align-items: center;

    margin: 0 1rem;

    @media (max-width: 910px) {
        margin: 0;
        margin-bottom: 3rem;
        border: none !important;
    };
`;

export const Knowledge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    max-width: 7rem;
    width: 100%;
    height: 7rem;
    padding: 1rem;
    margin: .5rem;

    background-color: #333;

    cursor: pointer;
    transition: transform .3s ease-in-out;

    img {
        height: 5rem;
        object-fit: contain;
    }

    &:hover {
        z-index: 1;
        transform: translateY(-.5rem);
    };

    @media (max-width: 600px) {
        width: auto;
        max-width: none;
    };
`;

export const KnowledgeDropUp = styled.div`
    position: fixed;
    bottom: -46rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    width: 34rem;
    height: 46rem;
    padding: 3rem;

    background-color: rgba(0, 0, 0, .85);
    transition: bottom .7s ease-in-out;

    &.show {
        bottom: calc(50% - 23rem);
    };

    .MuiSvgIcon-root {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-size: 2.5rem;
        cursor: pointer;
        transition: color .2s ease;

        &:hover {
            color: #555;
        };
    };

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    };

    img {
        width: 15rem;
        height: 15rem;
    };

    h1, p {
        text-align: center;
    };

    a {
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 500;
        color: #FFF;
        text-decoration: none;
        transition: color .2s ease;

        &:hover {
            color: #555;
        };
    };

    @media(max-width: 350px) {
        width: 100%;
    };
`;


// min-height: 750px; min-width: 910px --> need responsivity in circle porcentage