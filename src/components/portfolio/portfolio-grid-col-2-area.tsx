import React, { useEffect, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

// images
import port_1 from "@/assets/img/inner-project/portfolio-col-2/1.png";
import port_2 from "@/assets/img/inner-project/portfolio-col-2/2.png";
import port_3 from "@/assets/img/inner-project/portfolio-col-2/3.png";
import port_4 from "@/assets/img/inner-project/portfolio-col-2/4.png";
import port_5 from "@/assets/img/inner-project/portfolio-col-2/5.png";
import port_6 from "@/assets/img/inner-project/portfolio-col-2/6.png";
import port_7 from "@/assets/img/inner-project/portfolio-col-2/7.png";
import port_8 from "@/assets/img/inner-project/portfolio-col-2/8.png";
import port_9 from "@/assets/img/inner-project/portfolio-col-2/9.png";
import port_10 from "@/assets/img/inner-project/portfolio-col-2/10.png";

// data
const portfolio_data = [
  {
    id: 1,
    img: port_1,
    title: "LUJO MINIMALISTA",
    year: "BAÑOS",
    show: "cat1 cat4",
  },
  {
    id: 2,
    img: port_2,
    title: "DISEÑO SIN LÍMITES",
    year: "BAÑOS",
    show: "cat2 cat4",
  },
  {
    id: 3,
    img: port_9,
    title: "DISEÑO FUNCIONAL",
    year: "COCINAS",
    show: "cat3 cat4",
  },
  {
    id: 4,
    img: port_10,
    title: "ESPACIOS QUE INSPIRAN",
    year: "COCINAS",
    show: "cat3 cat4",
  },
  {
    id: 5,
    img: port_3,
    title: "SUEÑOS MODERNOS",
    year: "DORMITORIOS",
    show: "cat3 cat4",
  },
  {
    id: 6,
    img: port_4,
    title: "CONFORT ELEGANTE",
    year: "DORMITORIOS",
    show: "cat1 cat4",
  },
  {
    id: 7,
    img: port_7,
    title: "PRODUCTIVIDAD CON ESTILO",
    year: "OFICINAS",
    show: "cat3 cat4",
  },
  {
    id: 8,
    img: port_8,
    title: "ESPACIOS CREATIVOS",
    year: "OFICINAS",
    show: "cat3 cat4",
  },
  {
    id: 9,
    img: port_5,
    title: "DISEÑO VERSÁTIL",
    year: "OTROS",
    show: "cat2 cat4",
  },
  {
    id: 10,
    img: port_6,
    title: "AMBIENTES ÚNICOS",
    year: "OTROS",
    show: "cat3 cat4",
  },
];

// styles
const containerStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: 'white',
  padding: '40px 0'
};

const titleStyle: CSSProperties = {
  color: 'white',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '20px',
  fontWeight: '500',
  letterSpacing: '-0.02em',
  lineHeight: '1.3',
  textTransform: 'uppercase'
};

const metaStyle: CSSProperties = {
  color: 'white',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
};

const filterButtonStyle: CSSProperties = {
  color: 'white',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '0.02em',
  background: 'none',
  border: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
  marginBottom: '10px',
  transition: 'opacity 0.3s ease'
};

const moreProjectsStyle: CSSProperties = {
  color: 'white',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '0.02em',
  textDecoration: 'none'
};

export default function PortfolioGridColTwoArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);
  return (  
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130" style={containerStyle}>
      <div className="container container-1530">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40 flex-wrap">
              <button data-filter="*" className="active" style={filterButtonStyle}>
                <span>TODOS</span>
              </button>
              <button data-filter=".cat1" style={filterButtonStyle}>
                <span>BAÑOS</span>
              </button>
              <button data-filter=".cat2" style={filterButtonStyle}>
                <span>COCINAS</span>
              </button>
              <button data-filter=".cat3" style={filterButtonStyle}>
                <span>DORMITORIOS</span>
              </button>
              <button data-filter=".cat4" style={filterButtonStyle}>
                <span>OTROS</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row grid g-5" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-6 col-lg-6 col-md-6 col-sm-12 grid-item ${item.show}`}
            >
              <div 
                className="tp-project-5-2-thumb mb-30 p-relative" 
                style={{
                  marginBottom: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                  <div 
                    className="tp-project-5-2-content"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '20px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      zIndex: 2
                    }}
                  >
                    <span className="tp-project-5-2-meta" style={{
                      ...metaStyle,
                      display: 'block',
                      marginBottom: '8px'
                    }}>{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm" style={{
                      ...titleStyle,
                      margin: 0
                    }}>{item.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Comentado temporalmente - Botón "Más Proyectos"
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/portfolio-grid-col-4-fullwidth"
                  style={moreProjectsStyle}
                >
                  <span className="tp-btn-circle-text">
                    Más <br /> Proyectos
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
