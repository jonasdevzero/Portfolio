import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

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
    height: 100vh;
    margin-top: 6rem;

    display: flex;
    align-items: center;
    flex: 1;

    & + & {
        margin-top: 6rem !important;
    };

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
    height: 100%;
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
    align-items: center;
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

    margin-bottom: 1rem;

    @media (max-width: 930px) {
        font-size: 1.6rem;
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

export const StyledLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 12.5rem;
    background-color: #000;
    color: #FFF;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 700;
    transition: all .3s ease-in-out;

    border: solid .1rem #FFF;
    border-radius: .4rem;
    outline: none;
    cursor: pointer;

    &:hover {
        color: rgba(255, 255, 255, .7);
        border-color: rgba(255, 255, 255, .7);
    };

    @media (max-width: 1000px) {
        margin-left: 0;
    };
`;

export const SkilsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    height: 100vh;
`;
