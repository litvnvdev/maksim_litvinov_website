import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body{
    height: 100vh;
    position: relative;
    background: ${({theme})=>theme.body};
    color: ${({theme})=>theme.text};
    font-family: "Poppins", sans-serif;
    transition: all 0.35s linear;
}
nav {
    background: ${({theme})=>theme.body};
}

`