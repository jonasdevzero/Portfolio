import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    html {
        font-size: 62.5%;
    };
    body {
        color: #000;
        background-color: #FFF;
        font-family: 'Roboto', sans-serif;
    };
    #root {
        width: 100vw;
        height: 100vh;
    };
`;