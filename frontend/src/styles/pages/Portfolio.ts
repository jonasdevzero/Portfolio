import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    margin-top: 6rem;
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
        background-image: url(${({ image }) => image}) !important;
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

    .MuiSvgIcon-root {
        cursor: pointer;
    };
`;
