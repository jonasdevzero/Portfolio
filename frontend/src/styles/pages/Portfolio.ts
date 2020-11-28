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
    padding-top: 6rem;
    padding-bottom: 6rem;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const InfoContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 12rem);

    display: flex;
    align-items: center;
    margin-bottom: 6rem;

    img {
        width: 50%;
        object-fit: cover;
    };

    @media (max-width: 900px) {
        flex-direction: column;
        margin-top: 6rem;

        img {
            height: 50%;
            width: 100%;
        };
    };
`;

export const InfoDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

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

    @media (max-width: 900px) {
        justify-content: center;
        align-items: center;
    };
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
`;

export const Project = styled.section`
    display: flex;
    align-items: center;

    max-width: 95rem;
    width: 100%;
    height: 27rem;

    padding: 3rem;
    margin-bottom: 4rem;
    background-color: #191818;

    @media (max-width: 900px) {
        flex-direction: column;
        width: max-content;
        height: 45rem;
        padding: 0;
        border: 0;
        background-color: #191818;
    }; 
    @media (max-width: 360px) {
        width: 100%;
        height: 40rem;
    }; 
`;

interface IPojectBanner {
    image: string;
    gif: string;
};
export const ProjectBanner = styled.div<IPojectBanner>`
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    width: 36rem;
    height: 20.4rem;

    transition: background-image .5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-image: url(${({ gif }) => gif});
    };

    @media (max-width: 900px) {
        border-radius: 0 0 .4rem .4rem;
    };
    @media (max-width: 360px) {
        width: 100%;
        background-position-y: top;
    };
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    flex: 1;

    height: 20rem;
    padding: 2rem;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    };
    p {
        font-size: 1.6rem;
        line-height: 3rem;
        max-width: 50rem;
    };

    @media (max-width: 900px) {
        width: 36rem;
        flex: 1;
        border-radius: 0 0 .4rem .4rem;
    };
    @media (max-width: 360px) {
        width: 100%;
        padding-top: 0;
    };
`;

export const ProjectLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    .MuiSvgIcon-root {
        cursor: pointer;
    };
`;

interface IPagination {
    arrowBack?: string;
    arrowFoward?: string;
};
export const Pagination = styled.div<IPagination>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #191818;
    padding: 0 1rem;
    margin-top: 2rem;

    .MuiSvgIcon-root {
        cursor: pointer;
    };
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
