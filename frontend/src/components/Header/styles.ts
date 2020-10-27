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

    @media (max-width: 400px) {
        position: relative;
        top: 0;
        right: ${({ show }: ShowDropsideProps) => show ? '0' : '-100%'};
        transition: right .5s ease;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100vw;
        height: 100vh;
        z-index: 11;
        background-color: #000;

        margin-top: auto;
    };
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