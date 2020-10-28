import styled from 'styled-components';

interface ShowDropsideProps {
    show: boolean;
};

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 6rem;
    position: fixed;

    @media (max-width: 400px) {
        z-index: 10;
    }
`;

export const Navigation = styled.nav`
    display: flex;

    @media (max-width: 400px) {
        display: none;
    }

    a {
        font-size: 1.6rem;
        font-weight: 500;
        text-decoration: none;
        margin: 0 2rem;
        color: #000;

        @media (max-width: 400px) {
            font-size: 1.6rem;
            margin: 1.5rem 1rem;
            color: #fff;
        };
    };
`;

export const Dropside = styled.div`
    display: none;

    position: relative;
    top: 0;
    right: ${({ show }: ShowDropsideProps) => show ? '0' : '-100%'};
    transition: right .5s ease;

    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: #000;

    margin-top: auto;
    padding: 6rem 0;

    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
    };
`;

export const DropsideButton = styled.button`
    color: #FFF;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    text-align: start;

    background-color: transparent;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    display: none;
    background-color: transparent;
    border: none;
    outline: none;

    position: absolute;
    top: 2rem;
    right: 3rem;

    .MuiSvgIcon-root {
        color: ${({ show }: ShowDropsideProps) => show ? '#fff' : '#000'};
    };

    @media (max-width: 400px) {
        display: block;
        z-index: 12;
    };
`;