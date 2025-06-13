import React, { CSSProperties } from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
  lineHeight: '1.2',
  letterSpacing: '0.02em'
};

const subtitleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  opacity: '0.9'
};

const textStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  opacity: '0.8',
  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)'
};

const linkStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif"
};

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{backgroundImage: "url(/assets/img/home-03/about/escri1.png)"}}
    >
      <div className="breadcurmb-site d-none">
        <h6 style={textStyle}>Sobre Nosotros</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo} style={textStyle}>
          <span>
            Descubre más
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle" style={subtitleStyle}>
                Estudio de <br /> Diseño y Fabricación
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation" style={titleStyle}>
                DISEÑO Y CALIDAD EN CADA DETALLE.
              </h1>
              <p style={textStyle}>Mobiliario a medida que transforma espacios.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p style={textStyle}>
                En Estudio Casa Brava diseñamos, fabricamos y colocamos muebles a medida y puertas para proyectos de arquitectura, combinando precio, calidad y detalle de forma única en el mercado.
              </p>
              <a className="tp-btn-white-sm border-style" href="#" style={linkStyle}>
                Nuestra Historia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
