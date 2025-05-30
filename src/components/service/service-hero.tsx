import React, { CSSProperties } from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/home-03/about/balcon.png";

const sectionStyle: CSSProperties = {
  backgroundColor: '#000000'
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

const subtitleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  fontSize: '1.5rem',
  marginTop: '1rem',
  opacity: '0.9'
};

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb" style={sectionStyle}>
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation" style={titleStyle}>
                SERVICIOS
              </h4>
              <h5 style={subtitleStyle}>Cada milímetro cuenta.</h5>
              <p className="tp_fade_bottom" style={textStyle}>
                En Estudio Casa Brava ofrecemos un servicio integral para proyectos de arquitectura, interiorismo y equipamiento.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{height:"auto"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
