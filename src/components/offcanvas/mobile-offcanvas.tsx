import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import logo from '@/assets/img/logo/estudiocb.svg';
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({openOffcanvas,setOpenOffcanvas}: IProps) {
  return (
    <>
      <div 
        className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}
        style={{ 
          backdropFilter: 'none',
          background: '#000000',
          boxShadow: 'none'
        }}
      >
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
                style={{ color: '#ffffff' }}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title" style={{ color: '#ffffff' }}>BIENVENIDO A ESTUDIO CASA BRAVA</h3>
              <p style={{ color: '#ffffff' }}>TU PROYECTO, NUESTRA PRECISIÓN. </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none" style={{ color: '#ffffff' }}>
              <MobileMenus/>
            </div>
            {/* 
            ======================================
            COMPONENTE TEMPORALMENTE DESACTIVADO
            Galería de imágenes en el menú móvil
            Lista para ser utilizada cuando se necesite
            ======================================

            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            */}
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm" style={{ color: '#ffffff' }}>INFO</h3>
              <ul>
                <li>
                  <a href="tel:+59897666077" style={{ color: '#ffffff' }}>+598 97 666 077</a>
                </li>
                <li>
                  <a href="mailto:jiparodi@estudiocasabrava.com" style={{ color: '#ffffff' }}>jiparodi@estudiocasabrava.com</a>
                </li>
                <li>
                  <a href="#" style={{ color: '#ffffff' }}>21 DE SETIEMBRE 2719, ESQUINA WILLIMAN</a>
                </li>
              </ul>
            </div>
            {/* 
            ======================================
            COMPONENTE TEMPORALMENTE DESACTIVADO
            Sección de Follow Us / Redes Sociales
            Lista para ser utilizada cuando se necesite
            ======================================

            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm" style={{ color: '#ffffff' }}>Follow Us</h3>
              <ul>
                <li>
                  <a href="#" style={{ color: '#ffffff' }}><InstagramTwo /></a>
                </li>
                <li>
                  <a href="#" style={{ color: '#ffffff' }}><Dribble /></a>
                </li>
                <li>
                  <a href="#" style={{ color: '#ffffff' }}><Behance /></a>
                </li>
                <li>
                  <a href="#" style={{ color: '#ffffff' }}><Youtube /></a>
                </li>
              </ul>
            </div>
            */}
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
