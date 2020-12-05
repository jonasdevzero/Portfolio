import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
 
    button {
        background-color: transparent;
        padding: 2rem;
        margin: 1rem;

        border: none;
        outline: none;
        cursor: pointer;
        transition: background-color .5s ease-in-out;
        z-index: 2;

        .MuiSvgIcon-root { 
            font-size: 3rem !important;
            color: #FFF;
        };

        @media (max-width: 500px) {
            padding: 0;
        }
    };
`;

export const DraggableBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;

    z-index: 1;

    &:active {
        cursor: grabbing !important;
    };
`;

interface IItem {
    position?: string;
}
export const Item = styled.div<IItem>`
    position: absolute;
    top: 0;
    width: 100%;
    height: max-content;
    left: ${({ position }) => position};

    transition: left .5s ease;
`;

export const Dots = styled.div`
    position: absolute;
    bottom: 0;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    z-index: 2;


    span {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 .7rem;
        border-radius: 50%;
        cursor: pointer;

        transition: background-color .3s ease;
        background-color: #333;

        &.selected {
            background-color: #FFF;
        }
    };
`;