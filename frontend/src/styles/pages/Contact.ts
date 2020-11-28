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
    align-items: center;
    justify-content: center;
    
    height: calc(100vh - 12rem);

    @media (max-width: 1000px) {
        height: auto;
    };
`;

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50%;
        object-fit: cover;
    };

    @media (max-width: 1000px) {
        flex-direction: column;

        img {
            width: 100%;
        };
    };
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    h1 {
        font-size: 3.8rem;
        margin-bottom: 1rem;
    };
    p {
        font-size: 1.7rem;
        line-height: 2.3rem;
        text-align: justify;
        max-width: 50rem;
        margin-bottom: 2.5rem;
    };
    div {
        display: flex;
        margin-bottom: 2rem;

        h2 {
            margin-right: .5rem;
        };
        a {
            color: #FFF;
            text-decoration: none;
            font-size: 1.6rem;
            transition: color .3s ease;

            &:hover {
                color: rgba(255, 255, 255, .7);
            };
        };

        .MuiSvgIcon-root {
            font-size: 3.5rem !important;
            margin-right: 1.5rem;
            color: #FFF;
            transition: color .3s ease;
        };
        .MuiSvgIcon-root:hover {
            color: rgba(255, 255, 255, .7);
        };
    };
`;
