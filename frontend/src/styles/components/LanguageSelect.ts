import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 3rem;

    position: absolute;
    bottom: 2rem;
    right: 2rem;

    background-color: #191818;
    border-radius: .3rem;
    cursor: pointer;

    img {
        width: 2.5rem;
        margin-right: .5rem;
    };

    .MuiSvgIcon-root {
        font-size: 2.5rem !important;
    };
`;

export const DropUp = styled.div`
    display: ${({ show }: { show: boolean }) => show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 5.5rem;
    right: 2rem;

    width: 7rem;
    height: 3rem;

    background-color: #191818;
    border-radius: .3rem;
    cursor: pointer;

    img {
        width: 2.5rem;
        margin-right: .5rem;
    };
`;
