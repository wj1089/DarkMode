import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import dog1 from "./../img/dog1.jpg"; //자신이 원하는 이미지를 import 하세요.
import dog2 from "./../img/dog2.jpg";
import dog3 from "./../img/dog3.jpg";
import './main.css'




const TOTAL_SLIDES = 4;

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

// 다음슬라이드
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
        setCurrentSlide(0);
        } else {
        setCurrentSlide(currentSlide + 1);
        }
    };

// 전슬라이드
    const prevSlide = () => {
        if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
        } else {
        setCurrentSlide(currentSlide - 1);
        }
    };
  
   useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);


        return (

            <div>
            {currentSlide}
            <div className="SliderContainer" ref={slideRef}>
                <Slide img={dog1} />
                <Slide img={dog2} />
                <Slide img={dog3} />
                <Slide img={dog1} />
                <Slide img={dog3} />
                <Slide img={dog1} />
                <Slide img={dog2} />
                <Slide img={dog3} />
                <Slide img={dog1} />
                <Slide img={dog3} />                
                <Slide img={dog1} />
                <Slide img={dog2} />
                <Slide img={dog3} />
                <Slide img={dog1} />
                <Slide img={dog3} />

            </div>

            <button className="clickButton" onClick={prevSlide}>Previous Slide</button>
            <button className="clickButton" onClick={nextSlide}>Next Slide</button>

            </div>
        );
    }