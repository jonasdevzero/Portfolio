import styled from 'styled-components/macro';

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

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    height: calc(100vh - 12rem);
`;

export const Title = styled.h1`
    font-size: 5.6rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: 400px) {
        font-size: 4.6rem;
    };
`;

export const Subtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2.8rem;
`;

export const Text = styled.p`
    font-size: 2rem;
    letter-spacing: .2rem;
    font-weight: 500;
    margin: 3rem 2rem 1.5rem 2rem;
    text-align: center;

    @media (max-width: 400px) {
        font-size: 1.6rem;
    };
`;

export const Button = styled.button`
    height: 5rem;
    width: 15rem;
    background-color: #000;
    color: #FFF;

    border: none;
    outline: none;
    cursor: pointer;

    font-size: 1.4rem;
    font-weight: 600;

    margin-top: 2rem;

    @media (max-width: 400px) {
        height: 4.5rem;
        width: 12rem;

        font-size: 1.2rem;
    };
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;

    margin-top: 2rem;

    .MuiSvgIcon-root {
        font-size: 3.5rem !important;
        margin: 0 1rem;
        color: #000;
    };
`;
