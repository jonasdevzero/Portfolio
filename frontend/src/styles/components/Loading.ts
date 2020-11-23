import styled from 'styled-components';

interface ILoading {
    loading?: string;
    fadeOut?: string;
}
export  const Container = styled.div<ILoading>`
    position: fixed;
    width: 100vw;
    height: 100vh;

    display: ${({ loading }) => loading === 'true' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    z-index: 100000000;

    transition: background-color .5s ease-in-out;
    background-color: ${({ fadeOut }) => fadeOut === 'true' ? 'transparent' : 'rgba(0, 0, 0, .7)'};
`;

export const Image = styled.img<ILoading>`
    width: ${({ fadeOut }) => fadeOut === 'true' ? '0' : '15rem'};
`;