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
`;

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 5rem;
    margin-top: 5rem;

    flex-wrap: wrap;
`;

export const ProjectInfo = styled.div`
    display: none;
    position: absolute;
`;

export const Project = styled.div`
    width: 50rem;
    height: 30rem;

    background-color: #191818;
    margin: 1rem;

    display: flex;
    flex-direction: column;
    position: relative;

    cursor: pointer;
`;

interface IProjectBanner {
    img: string;
    gif: string;
}
export const ProjectBanner = styled.div<IProjectBanner>`
    width: 100%;
    height: 30rem;
    object-fit: contain;

    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;

    transition: background-image .1s ease-in-out;

    &:hover {
       background-image: url(${({ gif }) => gif}) ;
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

    .selected {
        color: #F00;
    };
`;
