import {createGlobalStyle} from  'styled-components';

export const lightTheme ={
    body:"#fff",
    fontColor:"#000",
    transition: "all 0.25s ease-in-out"
};
export const darkTheme = {
    body:"#000",
    fontColor:"#fff",
    transition: "all 0.25s ease-in-out"

}

export const GlobalStyles =  createGlobalStyle`
    body{
        background-color : ${(props) => props.theme.body}
    }
`


