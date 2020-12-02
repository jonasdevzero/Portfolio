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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;

    width: 100vw;
`;

export const InfoContainer = styled.section`
    width: 65rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #191818;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: .2rem;

    @media (max-width: 650px) {
        width: 40rem;
    };
    @media (max-width: 400px) {
        width: 100%;
        margin: 0;
    };
`;

export const SlideContainer = styled.div`
    width: 100%;
    height: 100vh;

    img {
        width: 100%;
        object-fit: contain;
    };

    @media (max-width: 1000px) {
        height: 37rem;
    };
    @media (max-width: 650px) {
        height: 22rem;
    };
`;

export const Info = styled.div`
    width: 100%;
    margin-top: 3rem;
    padding: 3rem;
    padding-top: 0;

    h1 {
        font-size: 3.8rem;
    };
    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    };
    p {
        font-size: 1.7rem;
        line-height: 2.3rem;
        text-align: justify;
    };
    div {
        margin-top: 2rem;

        a {
            color: #777;
            font-size: 1.6rem;
            font-weight: 500;
            text-decoration: none;
            margin-right: 1rem;
            transition: color .3s ease;

            &:hover {
                color: #444;
            };
        };
    };
`; 
