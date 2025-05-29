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
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {portfolio_data.map((item) => (
              <div key={item.id} className="tp-project-4-bg project-panel">
                <Link href="/">
                  <div className="tp-project-4-thumb">
                    <Image src={item.img} alt="port-thumb" style={{ height: "auto" }} /> 
                  </div>
                  <div className="tp-project-4-content z-index">
                    <h4 className="tp-project-4-title tp_reveal_anim-2" style={titleStyle}>
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
