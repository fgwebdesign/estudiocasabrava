import React, { CSSProperties } from "react";
import Image from "next/image";

// imgStyle
const videoStyle: CSSProperties = { 
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

export default function HeroBannerThree() {
  return (
    <div className="tp-hero-4-area tp-btn-trigger">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-4-content-wrap">
              <div className="p-relative">
                <div className="tp-hero-4-content p-relative">
                  <h1 className="tp-section-title-200 tp-char-animation">
                    ESTUDIO <br />
                    CASA BRAVA
                  </h1>
                </div>
                <div className="tp-hero-4-achievement tp-btn-bounce d-none d-md-block">
                  <span>
                    <i
                      data-purecounter-duration="1"
                      data-purecounter-end="18"
                      className="purecounter"
                    >
                      +18
                    </i>
                  </span>
                  <p>
                    Proyectos completados <br /> con éxito
                  </p>
                </div>
              </div>
              <div className="tp-hero-4-thumb text-end">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={videoStyle}
                  data-speed=".7"
                >
                  <source src="/assets/img/home-04/hero/video.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
