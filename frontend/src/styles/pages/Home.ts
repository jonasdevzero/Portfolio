import styled from 'styled-components';

export const Wrapper = styled.div`
    background: url('/images/profile.png') no-repeat;
    background-size: contain;
    background-position: 78%;

    @media (max-width: 1000px) {
        background-position: center;
    };

    @media (max-width: 620px) {
        background-image: none;
    };
`;

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

    @media (max-width: 1000px) {
        align-items: center;
    };
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: max-content;

    @media (max-width: 1000px) {
        width: 100%;
    };
`;

export const Title = styled.h1`
    font-size: 8.5rem;
    font-weight: 700;
    width: 100%;

    @media (max-width: 1000px) {
        text-align: center;
    };

    @media (max-width: 500px) {
        font-size: 5.6rem;
    };
`;

export const Subtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.8rem;
    width: 100%;

    @media (max-width: 1000px) {
        margin: 0;
        text-align: center;
    };
`;

export const Text = styled.p`
    font-size: 2rem;
    letter-spacing: .1rem;
    font-weight: 400;

    @media (max-width: 1000px) {
        text-align: center;
    };

    @media (max-width: 500px) {
        font-size: 1.8rem;
    };
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
        transition: color .3s ease;
    };

    .MuiSvgIcon-root:hover {
        color: rgba(255, 255, 255, .7);
    };
`;
