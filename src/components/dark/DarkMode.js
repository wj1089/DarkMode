import React,{useState} from 'react';
import "./DarkMode.css"
import styled, {ThemeProvider} from "styled-components"
import {lightTheme, darkTheme,GlobalStyles} from "./themes.js"

const StyledApp = styled.div`
    color: ${(props)=>props.theme.fontColor};
`;


const DarkMode = () => {

    const [theme, setTheme] = useState("light");

    const themeToggler = ()=>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <StyledApp>
                    Mode
                    <button onClick={()=>themeToggler()}>Change Theme</button>
                </StyledApp>
            </ThemeProvider>
        </>
    );
};

export default DarkMode;