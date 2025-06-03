'use client';
import React, { useEffect, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import { Cart, MenuThree } from "@/components/svg";
import useSticky from "@/hooks/use-sticky";
import logo from '@/assets/img/logo/logoestudioblanco.svg';
import CartOffcanvas from "@/components/offcanvas/cart-offcanvas";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

const buttonStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: '400'
};

export default function HeaderThree() {
  const {sticky,headerRef,headerFullWidth} = useSticky();
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          className={`tp-header-4-area tp-header-4-mob-space tp-transparent z-index-5 ${sticky?'header-sticky':''}`}
        >
          <div className="container container-1770">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image 
                      src={logo} 
                      alt="logo" 
                      width={300} 
                      height={75} 
                      style={{
                        width: 'auto',
                        height: '75px',
                        maxWidth: '100%'
                      }}
                    />
                  </Link>
                </div>  
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="tp-header-4-menu header-main-menu">
                  <nav className="tp-main-menu-content">
                    <HeaderMenus />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-9 col-md-6 col-6">
                <div className="tp-header-4-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-6-menu-box d-xl-none">
                    <button 
                      className="tp-header-6-menubar"
                      onClick={() => setOpenOffCanvas(true)}
                    >
                      <MenuThree />
                    </button>
                  </div>
                  <div className="tp-header-4-btn d-none d-xl-block">
                    <Link
                      className="tp-btn-border-sm"
                      href="/"
                      style={buttonStyle}
                    >
                      CONTACTO
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
    </>
  );
}
