import React from "react";
import Link from "next/link";

export default function AboutTwo() {
  return (
    <div className="tp-about-4-area pt-100 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-md-10">
            <div className="tp-about-4-title-box tp_fade_bottom">
              <h4 className="tp-about-4-title">
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
                    <p>
                      Somos un equipo apasionado por transformar espacios en experiencias únicas. Con sede en Uruguay, nos especializamos en crear diseños que reflejan la personalidad y estilo de nuestros clientes.
                    </p>
                    <Link href="/">Leer más sobre nosotros</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-4-content item-2 tp_fade_bottom">
                    <p>
                      Nuestro enfoque se centra en la innovación y la atención al detalle. Desde la conceptualización hasta la ejecución, cada proyecto es una obra maestra personalizada.
                    </p>
                    <Link href="/">Contáctanos</Link>
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
