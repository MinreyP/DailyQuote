import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        background-color: #1C1C1C;
        color: ${({themeColor}) => themeColor};
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    html, body, #root, #root > div {
        height: 100%;
        min-height: 100vh;
    }   

    div {
        width: 100%;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Jost', sans-serif;
        font-weight: 600;
        line-height: 1.3em;
    }

    p {
        font-family: 'Source Sans Pro', sans-serif;
        line-height: 1.6em;
    }

    a {
        color: ${({ themeColor }) => themeColor};
        text-decoration: none;
    }
`

export default GlobalStyle;