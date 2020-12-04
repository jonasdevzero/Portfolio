import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;

    h2 {
        margin-right: .5rem;
        margin-bottom: 2rem;
    };

    .MuiSvgIcon-root {
        font-size: 3.5rem !important;
        margin-right: 1.5rem;
        color: #FFF;
        transition: color .3s ease;
    };
    .MuiSvgIcon-root:hover {
        color: rgba(255, 255, 255, .7);
    };
`;
