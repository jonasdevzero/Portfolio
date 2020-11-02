import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    /* background: url('/profile.jpg') no-repeat right; */
    /* background-size: contain; */

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

export const Title = styled.h1`
    font-size: 8.5rem;
    font-weight: 700;

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

export const StyledLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 12.5rem;
    margin-top: 3rem;
    /* margin-left: 9.5rem; */
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
