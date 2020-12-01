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
        width: 10%;
        height: 100%;
        background-color: transparent;
        padding: 1rem;

        border: none;
        outline: none;
        cursor: pointer;
        transition: background-color .5s ease-in-out;
        z-index: 10000;

        .MuiSvgIcon-root { 
            font-size: 3rem !important;
            color: #FFF;
        };

        &:hover {
            background-color: rgba(0, 0, 0, .6);
        };
    };

`;

interface IItem {
    position?: string;
}
export const Item = styled.div<IItem>`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
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