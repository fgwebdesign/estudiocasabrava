"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from "react";

// internal imports
import star_icon from "@/assets/img/home-04/service/sv-star-1.png";
import sv_1 from "@/assets/img/home-04/service/sv-icon-1.png";
import sv_2 from "@/assets/img/home-04/service/sv-icon-2.png";
import sv_3 from "@/assets/img/home-04/service/sv-icon-3.png";
import sv_4 from "@/assets/img/home-04/service/sv-icon-4.png";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};

// service data
const service_data = [
  {
    id: 1,
    title: "Arquitectura",
    subtitle: "Desarrollo integral de proyectos arquitectónicos para edificios, viviendas y espacios comerciales.",
  },
  {
    id: 2,
    title: "Interiorismo",
    subtitle: "Diseño de interiores personalizado para crear espacios funcionales y estéticamente atractivos.",
  },
  {
    id: 3,
    title: "Muebles a Medida",
    subtitle: "Cotización, fabricación y colocación de mobiliario personalizado adaptado a cada espacio.",
  },
  {
    id: 4,
    title: "Puertas y Equipamiento",
    subtitle: "Diseño e instalación de puertas y equipamiento especializado según las necesidades del proyecto.",
  },
  {
    id: 5,
    title: "Gestión de Proyectos",
    subtitle: "Acompañamiento integral desde la medición inicial hasta la instalación final con los más altos estándares.",
  },
  {
    id: 6,
    title: "Espacios Comerciales",
    subtitle: "Soluciones especializadas para oficinas y locales comerciales, optimizando cada espacio.",
  },
];

const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#FFFFFF',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  lineHeight: '1.2',
  fontWeight: '400'
};

const serviceItemStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#000000',
  backgroundColor: '#FFFFFF',
  backgroundImage: "none",
  padding: '40px 35px',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const serviceTitleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#000000',
  fontSize: '24px',
  marginBottom: '1rem',
  fontWeight: '600',
  letterSpacing: '-0.02em',
  lineHeight: '1.3'
};

const serviceTextStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.5',
  fontWeight: '400',
  letterSpacing: '0.01em'
};

const serviceIconStyle: CSSProperties = {
  marginBottom: '30px',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function ServiceThree() {
  return (
    <div
      className="tp-service-4-area pt-120 pb-170 fix bg-black"
      style={{ 
        backgroundColor: '#000000',
        backgroundImage: "url(/assets/img/home-04/brand/overly.png)",
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="tp-service-4-title-box tp_fade_bottom">
                <h4 className="tp-service-4-title" style={titleStyle}>
                  Colaboramos con clientes para crear espacios arquitectónicos y de interiores innovadores que reflejan su visión y necesidades únicas.
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="tp-service-4-shape-1 text-start text-md-end">
                <Image className="tp-zoom-in-out" src={star_icon} alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap">
        <Swiper {...slider_setting} className="swiper-container tp-service-4-slider-active">
          {service_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tp-service-4-item" style={serviceItemStyle}>
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm" style={serviceTitleStyle}>
                    <Link href="/service" style={{ color: '#000000', textDecoration: 'none' }}>{item.title}</Link>
                  </h4>
                  <p style={serviceTextStyle}>{item.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
