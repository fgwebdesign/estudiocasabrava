"use client";
import { gsap } from "gsap";
import React, { useEffect, CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header-three";
import PortfolioGridColTwoArea from "@/components/portfolio/portfolio-grid-col-2-area";
import BigText from "@/components/big-text";
import FooterThree from "@/layouts/footers/footer-three";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import { charAnimation, fadeAnimation, titleAnimation, zoomAnimation } from "@/utils/title-animation";

// styles
const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 'clamp(2.5rem, 8vw, 10rem)',
  lineHeight: '1.1',
  fontWeight: '400',
  letterSpacing: '0.02em',
  color: '#FFFFFF',
  wordBreak: 'break-word'
};

const subtitleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF'
};

const descriptionStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '1.2rem',
  color: '#FFFFFF',
  opacity: '0.8'
};

const heroSectionStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF'
};

const PortfolioGridColTwoMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  },[]);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      zoomAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      {/* magic cursor start */}  
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}
      
      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb" style={heroSectionStyle}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle" style={subtitleStyle}>ESTUDIO CASA BRAVA</span>
                      <h4 className="tm-hero-title fs-220 tp-char-animation" style={titleStyle}>
                        PROYECTOS
                      </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim" style={descriptionStyle}>
                      <p>
                        Descubre nuestros proyectos de construcción y remodelación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <PortfolioGridColTwoArea />
            {/* portfolio area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioGridColTwoMain;
