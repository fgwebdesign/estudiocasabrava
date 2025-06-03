"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
// images
import port_1 from "@/assets/img/home-03/about/cocina1.png";
import port_2 from "@/assets/img/home-03/about/dormi4.png";
import port_3 from "@/assets/img/home-03/about/escri1.png";
import port_4 from "@/assets/img/home-03/about/living3.png";

const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif"
};

// portfolio data
const portfolio_data = [
  {
    id: 1,
    title: "COCINAS",
    img: port_1,
  },
  {
    id: 2,
    title: "DORMITORIOS",
    img: port_2,
  },
  {
    id: 3,
    title: "OFICINAS",
    img: port_3,
  },
  {
    id: 4,
    title: "LIVINGS",
    img: port_4,
  },
];

export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ 
        backgroundColor: "#000000",
        backgroundImage: "url(/assets/img/home-04/brand/overly.png)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {portfolio_data.map((item) => (
              <div 
                key={item.id} 
                className="tp-project-4-bg project-panel"
                style={{ 
                  position: "relative",
                  backgroundColor: "#000000",
                  marginBottom: "0"
                }}
              >
                <Link href="/">
                  <div 
                    className="tp-project-4-thumb" 
                    style={{ 
                      overflow: "hidden",
                      margin: "0",
                      padding: "0"
                    }}
                  >
                    <Image 
                      src={item.img} 
                      alt="port-thumb" 
                      style={{ 
                        height: "auto",
                        width: "100%",
                        display: "block",
                        margin: "0",
                        padding: "0"
                      }} 
                    /> 
                  </div>
                  <div className="tp-project-4-content z-index">
                    <h4 
                      className="tp-project-4-title tp_reveal_anim-2" 
                      style={{
                        ...titleStyle,
                        color: "#ffffff",
                        textAlign: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%"
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
