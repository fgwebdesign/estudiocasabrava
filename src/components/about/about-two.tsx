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
                Descubre más sobre el equipo detrás del mejor estudio de interiorismo en Uruguay
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
                      Somos un equipo apasionado por transformar espacios en experiencias únicas. Con sede en Uruguay, nos especializamos en crear diseños que reflejan la personalidad y estilo de nuestros clientes.
                    </p>
                    <Link href="/" style={linkStyle}>LEER MÁS SOBRE NOSOTROS</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-2 tp_fade_bottom">
                    <p style={textStyle}>
                      Nuestro enfoque se centra en la innovación y la atención al detalle. Desde la conceptualización hasta la ejecución, cada proyecto es una obra maestra personalizada.
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
