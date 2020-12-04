import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    overflow: hidden;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100vw;
    margin-top: 6rem;
`;

export const Title = styled.h1`
    font-size: 3.8rem;
    margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    font-size: 1.7rem;
    line-height: 2.3rem;
    text-align: justify;
    max-width: 50rem;
    margin-bottom: 2.5rem;
`;

export const StyledLink = styled.a`
    font-size: 1.6rem;
    font-weight: 500;
    text-decoration: none;

    margin-right: 1rem;
    color: #777;
    transition: color .3s ease;

    &:hover {
        color: #444;
    };
`;

export const BoxContainer = styled.section`
    width: 100vw;
    height: calc(100vh - 12rem);

    display: flex;
    align-items: center;

    img {
        width: 50%;
        height: 100%;
        object-fit: cover;
    };

    @media (max-width: 900px) {
        flex-direction: column;
        height: max-content;

        img {
            height: 50%;
            width: 100%;
        };
    };
`;

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    padding: 2rem;

    @media (max-width: 900px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    };
`;
