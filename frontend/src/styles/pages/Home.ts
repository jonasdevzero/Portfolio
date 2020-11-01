import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    overflow: hidden;
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100vw;
    margin-top: 6rem;
    margin-bottom: 6rem;
`;

export const Inner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    height: calc(100vh - 12rem);
    width: 100%;
    max-width: 90rem;
    margin: auto;

    @media (max-width: 900px) {
        align-items: center;
    };
`;

export const Title = styled.h1`
    font-size: 8rem;
    font-weight: 700;

    @media (max-width: 900px) {
        text-align: center;
    };

    @media (max-width: 400px) {
        font-size: 4.6rem;
    };
`;

export const Subtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.8rem;
`;

export const Text = styled.p`
    font-size: 2rem;
    letter-spacing: .2rem;
    font-weight: 400;

    @media (max-width: 900px) {
        text-align: center;
    };

    @media (max-width: 400px) {
        font-size: 1.6rem;
    };
`;

export const Button = styled.button`
    height: 4rem;
    width: 12rem;
    background-color: #FFF;
    color: #000;

    border: none;
    border-radius: .4rem;
    outline: none;
    cursor: pointer;

    font-size: 1.4rem;
    font-weight: 700;

    margin-top: 3rem;
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;

    margin-top: 2rem;

    .MuiSvgIcon-root {
        font-size: 3.5rem !important;
        margin: 0 1rem;
        color: #FFF;
    };
`;
