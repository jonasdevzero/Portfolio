import styled from 'styled-components';

interface ShowDropsideProps {
    show: boolean;
};

export const Navigation = styled.nav`
    display: flex;
    position: relative;

    .header-animation {
        width: 10rem;
        height: .2rem;
        bottom: .2rem;
        position: absolute;

        transition: left .4s ease;

        background-color: #FFF;
    };

    @media (max-width: 500px) {
        display: none;
    }
`;

export const StyledLink = styled.a`
    width: 10rem;
    padding: 1rem 2rem;

    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: #FFF;     
    cursor: pointer;

    &.home~.header-animation, &:nth-child(1):hover~.header-animation {
        left: 0;
    };
    &.about~.header-animation, &:nth-child(2):hover~.header-animation {
        left: 10rem;
    };
    &.portfolio~.header-animation, &:nth-child(3):hover~.header-animation {
        left: 20rem;
    };
    &.contact~.header-animation, &:nth-child(4):hover~.header-animation {
        left: 30rem;
    };

    @media (max-width: 500px) {
        font-size: 1.6rem;
        margin: 1.5rem 1rem;
        color: #fff;
    };
`;

export const Dropside = styled.div`
    display: none;

    position: relative;
    top: 0;
    right: ${({ show }: ShowDropsideProps) => show ? '0' : '-101%'};
    transition: right .5s ease-in-out;

    width: 100vw;
    height: 100vh;
    z-index: 11;
    background-color: #000;

    margin-top: auto;
    padding: 6rem 0;

    .dropside-animation {
        width: .2rem;
        height: 6.3rem;
        left: 0;
        position: absolute;

        transition: top .3s ease-in;

        background-color: #FFF;
    };

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    };
`;

export const DropsideButton = styled.button`
    background-color: transparent;
    color: #FFF;
    font-size: 2rem;
    font-weight: 600;
    text-align: start;
    text-decoration: none;
    padding: 2rem 2.5rem;
    border: none;
    outline: none;

    &.home~.dropside-animation, &:nth-child(1):hover~.dropside-animation {
        top: 6.3rem;
    };
    &.about~.dropside-animation, &:nth-child(2):hover~.dropside-animation {
        top: 12.6rem;
    };
    &.portfolio~.dropside-animation, &:nth-child(3):hover~.dropside-animation {
        top: 18.9rem;
    };
    &.contact~.dropside-animation, &:nth-child(4):hover~.dropside-animation {
        top: 25.2rem;
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
    transition: color .5s ease;

    .MuiSvgIcon-root {
        font-size: 3rem !important;
        color: ${({ show }: ShowDropsideProps) => show ? '#FFF !important' : '#FFF'};
    };

    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        z-index: 12;
    };
`;

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 6rem;
    position: fixed;
    transition: background-color .4s ease-in-out;
    z-index: 100;

    &.scroll {
        background-color: rgba(255, 255, 255, .9);
        color: #000;

        ${Navigation} {
            a {
                color: #000;
            };
            .header-animation {
                background-color: #000;
            };
        };

        ${Button} {
            .MuiSvgIcon-root {
                color: #000;
            };
        };
    };

    @media (max-width: 500px) {
        z-index: 10;
    }
`;