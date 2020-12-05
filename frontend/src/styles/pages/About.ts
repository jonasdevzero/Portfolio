import styled from 'styled-components';

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    margin-top: 6rem;

    @media (max-width: 900px) {
        flex-direction: column;
    };

    @media (max-width: 500px) {
        margin-top: 0;
    };
`;

export const KnowledgeType = styled.div`
    display: flex;
    align-items: center;
    background-color: #191818;
    padding: 5rem;
    margin-bottom: 4rem;

    max-width: 100rem;
    width: 100%;

    &.reverse {
        flex-direction: row-reverse;
    }

    @media (max-width: 1000px) {
        padding: 3rem;
    };
    @media (max-width: 600px) {
        flex-direction: column !important;
        margin-bottom: 0;
        margin-top: .5rem;
    };
    @media (max-width: 360px) {
        padding: 0 .5rem 0 .5rem;
    };
`;

export const KnowledgeDescription = styled.div`
    display: flex;
    flex: .4;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1, p {
        text-align: center;
        max-width: 25rem;
    };

    @media (max-width: 360px) {
        h1 {
            margin-top: 4rem;
        };
    };
`;

export const KnowledgeWrapper = styled.div`
    display: flex;
    flex: .6;
    flex-wrap: wrap;
    align-items: center;

    margin: 0 1rem;

    @media (max-width: 910px) {
        margin: 0;
        margin-bottom: 3rem;
        border: none !important;
    };
`;

export const Knowledge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    max-width: 7rem;
    width: 100%;
    height: 7rem;
    padding: 1rem;
    margin: .5rem;

    background-color: #333;

    cursor: pointer;
    transition: transform .3s ease-in-out;

    img {
        height: 5rem;
        object-fit: contain;
    }

    &:hover {
        z-index: 1;
        transform: translateY(-.5rem);
    };

    @media (max-width: 600px) {
        width: auto;
        max-width: none;
    };
`;

export const KnowledgeDropUp = styled.div`
    position: fixed;
    bottom: -46rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    width: 34rem;
    height: 46rem;
    padding: 3rem;

    background-color: rgba(0, 0, 0, .85);
    transition: bottom .7s ease-in-out;
    z-index: 1;

    &.show {
        bottom: calc(50% - 23rem);
    };

    .MuiSvgIcon-root {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-size: 2.5rem;
        cursor: pointer;
        transition: color .2s ease;

        &:hover {
            color: #555;
        };
    };

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    };

    img {
        width: 15rem;
        height: 15rem;
    };

    h1, p {
        text-align: center;
    };

    @media(max-width: 350px) {
        width: 100%;
    };

    @media (max-height: 460px) {
        height: 100%;
        width: 100%;
        flex-direction: row;
        padding-top: 0;
        padding-bottom: 0;
        top: -100%;
        transition: top .5s ease;
        margin-top: 6rem;

        p {
            margin-bottom: 0;
            max-width: 25rem;
        };

        &.show {
            top: 0;
        };
    };
`;
