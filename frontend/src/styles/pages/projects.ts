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
    align-items: center;
    justify-content: center;
    flex: 1;

    width: 100vw;
    margin-top: 6rem;
    margin-bottom: 6rem;
`;

export const SlideContainer = styled.div`
    width: 65rem;
    height: 36.6rem;
    margin-top: 5rem;

    img {
        width: 100%;
        object-fit: contain;
    };
`;