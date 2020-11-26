import styled from 'styled-components';

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
    margin-bottom: 6rem;
`;

export const Inner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    margin-top: 5rem;
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    @media (min-width: 1000px) {
        align-items: center;
    };
    @media (max-width: 1000px) {
        width: 60rem;
    };
    @media (max-width: 700px) {
        align-items: center;
        width: max-content;
    };
`;

export const Project = styled.section`
    display: flex;
    height: 29.2rem;
    max-width: 100rem;
    width: 100%;

    margin-bottom: 3rem;
    padding: 2rem;
    border: solid .1rem #111;

    @media (max-width: 1000px) {
        flex-direction: column;
        height: 60rem;
    };
    @media (max-width: 700px) {
        height: 43rem;
        padding: 2rem 0;
        align-items: center;
    };
    @media (max-width: 400px) {
        width: 27rem;
        height: 36rem;
        padding: 1rem 0;
    };
`;

interface IPojectBanner {
    image: string;
    gif: string;
};
export const ProjectBanner = styled.div<IPojectBanner>`
    width: 44.8rem;
    height: 25.2rem;

    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    transition: background-image .3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-image: url(${({ gif }) => gif})
    }

    @media (max-width: 1000px) {
        width: 100%;
        height: 31.5rem;
    };

    @media (max-width: 700px) {
        width: 36rem;
        height: 20.5rem;
    };
    @media (max-width: 400px) {
        width: 25rem;
        height: 14.3rem;
    };
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 2rem;

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    };
    p {
        font-size: 2rem;
        font-weight: 500;
        max-width: 35rem;
    };
    a {
        font-size: 1.8rem;
        font-weight: 500;
        color: #777;
        text-decoration: none;
        margin-right: 2rem;
        transition: color .3s ease;

        &:hover {
            color: #333;
        }
    }

    .MuiSvgIcon-root {
        color: #FFF;
        cursor: pointer;
        transition: color .3s ease;

        &:hover {
            color: #777;
        };
    };

    @media (max-width: 700px) {
        padding-bottom: 0;

        h1 {
            font-size: 3rem;
        };
        p {
            font-size: 1.8rem;
        };
        a {
            font-size: 1.6rem;
        };
    };
`;

export const Pagination = styled.div`
    display: flex;
    background-color: #191818;
    margin-top: 2rem;
`;

interface IStyledLink {
    selected: boolean;
};
export const StyledLink = styled.a<IStyledLink>`
    color: ${({ selected }) => selected ? '#F00' : '#FFF'};
    padding: 1rem 2rem;
    font-size: 1.8rem;
    text-decoration: none;
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
        color: #F00;
    };
    .selected {
        color: #F00;
    };
`;
