import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: center;
    width: max-content;
    background-color: #191818;
    padding: 0 1rem;
    margin: 2rem 0;

    div {
        display: flex;
        align-items: center;
    };

    .MuiSvgIcon-root {
        cursor: pointer;
    };

    @media (max-width: 320px) {
        width: 100%;
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

    @media (max-width: 320px) {
        padding: 1rem;
    };
`;
