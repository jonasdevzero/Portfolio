import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 6rem;
    position: fixed;
`;

export const Link = styled(ReactRouterLink)`
    font-size: 1.8rem;
    text-decoration: none;
    margin: 0 2.5rem;
    color: #000;

    @media (max-width: 600px) {
        font-size: 1.6rem;
        margin: 0 1rem;
    };
`;