import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about1.png";
import ab_2 from "@/assets/img/inner-about/about/about3.png";
import ab_3 from "@/assets/img/inner-about/about/about2.png";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <Hand />
                Hola!
              </span>
              <p className="tp-dropcap tp_fade_bottom" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                En Estudio Casa Brava diseñamos, fabricamos y colocamos muebles a medida y puertas para proyectos de arquitectura, combinando precio, calidad y detalle de forma única en el mercado.
              </p>
              <p className="tp_fade_bottom" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Nos especializamos en cocinas, placares, vestidores, cavas, baños y todo el equipamiento que implique mobiliario a medida, 
                trabajando en estrecha colaboración con estudios, desarrolladores y clientes particulares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
