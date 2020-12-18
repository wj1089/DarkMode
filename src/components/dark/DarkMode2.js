import React, { useEffect, useState } from 'react';
import "./DarkMode.css"

const DarkMode2 = () => {

    const [darkMode, setDarkMode] = useState(getInitialMode());

    useEffect(()=>{
        localStorage.setItem('dark',JSON.stringify(darkMode));
    },[darkMode])

    function getInitialMode(){
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorScheme();

        if(isReturningUser){
            return savedMode;
        }else if(userPrefersDark){
            return true;
        }else{
            return false;
        }
        // return savedMode || false;
    }
        console.log("localStorage")
        console.log(localStorage)



    function getPrefColorScheme(){
        if(!window.matchMedia) return;
        // window.matchMedia()
        // CSS는 미디어쿼리를 이용해서 접속하는 웹브라우저의 가로 크기에 따라 다른 설정을 할 수 있습니다. 
        // 자바스크립트에서도 window.matchMedia()를 이용해서 
        // 접속하는 웹브라우저의 가로 크기에 따라 다른 작업을 할 수 있습니다. 
        // 반응형 웹디자인을 할 때 유용한 메소드입니다.

        return window.matchMedia ("(prefers-color-scheme: dark)").matches;
        //prefers-color-scheme CSS 미디어 특성은 
        //사용자의 시스템이 라이트 테마나 다크 테마를 
        //사용하는지 탐지하는 데에 사용됩니다.
        //https://developer.mozilla.org/ko/docs/Web/CSS/@media/prefers-color-scheme


    }
    console.log(window.matchMedia ("(prefers-color-scheme: dark)"));
   
    

    return (
        <>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <nav>
                    <div className='toggle-container'>
                        <span style={{ color : darkMode ? "grey":"yellow"}}>a</span>
                        <span className="toggle">
                        <input 
                            checked={darkMode}
                            onChange={() => setDarkMode(prevMode => !prevMode)}
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox" />
                        {/* htmlFor */}
                        {/* for는 JavaScript에서 예약어이므로 React 엘리먼트는 htmlFor를 대신 사용합니다. */}
                        </span>
                        <span  style={{ color : darkMode ? "slateblue":"grey"}}>b</span>
                    </div>
                </nav>
                <main>
                    <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
                    <h2>Toggle the switch to ssee some magic happen!</h2>
                </main>
            </div>
        </>
    );
};

export default DarkMode2;