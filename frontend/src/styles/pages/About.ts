import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100vw;
    margin-top: 6rem;
`;

export const Inner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
`;

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
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
    letter-spacing: .1rem;
    line-height: 2.3rem;

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

export const Button = styled.button`
    height: 5rem;
    width: 15rem;
    background-color: #191818;
    color: #FFF;
    transition: background-color .3s ease; 

    border: none;
    border-radius: .4rem;
    outline: none;
    cursor: pointer;

    font-size: 1.4rem;
    font-weight: 600;

    &:hover {
        background-color: #000;
    };

    @media (max-width: 400px) {
        height: 4.5rem;
        width: 12rem;

        font-size: 1.2rem;
    };
`;
