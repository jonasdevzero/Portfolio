import styled from 'styled-components';

interface CircleProps {
    porcentage: number
    animate?: boolean
}

export const CircleContainer = styled.div`
    width: max-content;
    height: max-content;
    position: relative;

    svg {
        width: 10rem;
        height: 10rem;

        circle {
            width: 10rem;
            height: 10rem;
            transition: ${({ animate }) => animate ? 'stroke-dashoffset 1s ease-in' : ''};

            fill: none;
            stroke: #000;
            stroke-width: 5;
            stroke-dasharray: 220;
            stroke-dashoffset: 220;

            :nth-child(1) {
                stroke-dashoffset: 0;
                stroke: #000;
            };
            :nth-child(2) {
                stroke-dashoffset: ${({ porcentage, animate }: CircleProps) => {
                    return animate === undefined ? 
                        `calc(220 - (220 * ${porcentage} / 100))` 
                        : 
                        animate ? `calc(220 - (220 * ${porcentage} / 100))` : 220;
                }};
                stroke: #FFF;
            };
        };
    };
`;

export const TextBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.4rem;
    };
    h2 {
        font-size: 1.2rem;
    };
`;