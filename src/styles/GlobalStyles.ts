import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body{
    height: 100vh;
    position: relative;
    background: ${({theme})=>theme.background};
    color: ${({theme})=>theme.text};
    font-family: "Poppins", sans-serif;
    transition: all 0.50s linear;
}

`