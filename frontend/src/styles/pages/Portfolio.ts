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
    background-color: #070707;
`;

export const Inner = styled.div`
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
    align-items: center;

    width: 100vw;
`;

export const Project = styled.section`
    display: flex;
    align-items: center;

    max-width: 85rem;
    width: 100%;
    height: 25rem;

    background-color: #191818;
    padding: 2.5rem;
    border-radius: .4rem;
    margin-bottom: 4rem;

    @media (max-width: 900px) {
        flex-direction: column;
        width: max-content;
        height: 45rem;
        padding: 0;
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

    height: 20rem;
    padding: 2rem;

    h1 {
        font-size: 3rem;
    };
    p {
        font-size: 1.6rem;
        line-height: 3rem;
    };
    a {
        color: #777;
        font-size: 1.6rem;
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
