import React, { CSSProperties } from "react";
import Link from "next/link";

const sectionStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF'
};

const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  lineHeight: '1.2',
  fontWeight: '400'
};

const textStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  opacity: '0.8'
};

const linkStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  textTransform: 'uppercase',
  fontWeight: '400'
};

export default function AboutTwo() {
  return (
    <div className="tp-about-4-area pt-100 pb-110" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-md-10">
            <div className="tp-about-4-title-box tp_fade_bottom">
              <h4 className="tp-about-4-title" style={titleStyle}>
                Diseño, fabricación y colocación de mobiliario a medida
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="tp-about-4-content-wrap">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-1 tp_fade_bottom">
                    <p style={textStyle}>
                      En Estudio Casa Brava diseñamos, fabricamos y colocamos muebles a medida y puertas para proyectos de arquitectura, combinando precio, calidad y detalle. Nos especializamos en cocinas, placares, vestidores, cavas, baños y todo el equipamiento que implique mobiliario a medida.
                    </p>
                    <Link href="/" style={linkStyle}>CONOCE NUESTRO PROCESO</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-2 tp_fade_bottom">
                    <p style={textStyle}>
                      Utilizamos materiales de primera calidad y contamos con un equipo altamente capacitado que garantiza una instalación prolija y eficiente. Desde la cotización hasta la entrega final, cuidamos cada etapa con un enfoque preciso y transparente, asegurando que cada proyecto supere las expectativas.
                    </p>
                    <Link href="/" style={linkStyle}>CONTÁCTANOS</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
