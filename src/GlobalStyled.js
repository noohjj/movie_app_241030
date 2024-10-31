import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{
    font-family: "Noto Sans KR", sans-serif;
}

img{
    width: 100%;
    display: block;
}

a{
    text-decoration: none;
}

`;
