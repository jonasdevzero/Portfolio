import styled from 'styled-components';

interface StyledLinkProps {
    marginTop?: string
}

export const StyledLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.5rem 2.8rem;
    margin-top: ${({ marginTop }: StyledLinkProps) => marginTop ? marginTop : '0'};
    
    background-color: #000;
    color: #F7F7F7;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;

    transition: all .4s ease-in-out;

    border: solid .1rem red;
    
    outline: none;
    cursor: pointer;

    &:hover {
        opacity: .6;
        border-color: rgba(255, 0, 0, .9);
    };
`;
