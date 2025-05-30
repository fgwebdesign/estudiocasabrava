"use client";
import { gsap } from "gsap";
import React, { CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header-three";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterThree from "@/layouts/footers/footer-three";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const sectionStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF'
};

const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF'
};

const textStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  opacity: '0.8'
};

const paragraphStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  opacity: '0.8',
  marginBottom: '2rem',
  fontSize: '1.1rem',
  lineHeight: '1.6'
};

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderThree />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={sectionStyle}>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20" style={textStyle}>
                        <Leaf />
                        Nuestros Servicios
                      </span>
                      <h4 className="tp-service-5-title" style={titleStyle}>
                        Tu proyecto, nuestra precisión
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-xl-10">
                    <p style={paragraphStyle}>
                      Nos especializamos en la cotización, fabricación y colocación de muebles a medida y puertas, adaptándonos a las necesidades de cada cliente y cada tipo de obra.
                      Trabajamos en una amplia variedad de proyectos, incluyendo edificios, viviendas, casas particulares, oficinas y espacios comerciales.
                    </p>
                    <p style={paragraphStyle}>
                      Utilizamos MDF, HDF y MDP, seleccionando siempre los materiales, herrajes y terminaciones que mejor se adapten a las exigencias y características de cada proyecto. 
                      Nuestra producción se ajusta milimétricamente a las medidas del espacio, con múltiples opciones de acabado para lograr un resultado estético y funcional.
                    </p>
                    <p style={paragraphStyle}>
                      Contamos con un equipo de colocadores altamente capacitado, lo que garantiza una instalación prolija, eficiente y alineada con los más altos estándares de calidad.
                      Acompañamos cada etapa con precisión, desde la toma de medidas hasta la instalación final, garantizando un resultado funcional, estético y alineado con los más altos estándares de calidad.
                    </p>
                  </div>
                </div>

                <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div>
              </div>
            </div>
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}

            {/* brand area */}
            <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems />
                </div>
              </div>
            </div>
            {/* brand area */}

            {/* line image slider  */}
            <LineImgSlider />
            {/* line image slider  */}

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

export default ServiceMain;
