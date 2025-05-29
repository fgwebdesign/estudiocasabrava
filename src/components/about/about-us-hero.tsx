import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

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
        <h6>Sobre Nosotros</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
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
              <span className="ab-inner-hero-subtitle">
                Estudio de <br /> Diseño y Fabricación
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                Diseño y calidad en cada detalle
              </h1>
              <p>Mobiliario a medida que transforma espacios.</p>
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
              <p>
                En Estudio Casa Brava diseñamos, fabricamos y colocamos muebles a medida y puertas para proyectos de arquitectura, combinando precio, calidad y detalle de forma única en el mercado.
              </p>
              <a className="tp-btn-white-sm border-style" href="#">Nuestra Historia</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
