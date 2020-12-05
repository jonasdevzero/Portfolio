import styled from 'styled-components';

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
    padding: 3rem 4rem;
    padding-top: 0;

    video {
        width: 100%;
        object-fit: contain;
    }
`; 
