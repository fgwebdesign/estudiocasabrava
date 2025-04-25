'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import HeaderMenus from "./header-menus";
// import { Cart } from "@/components/svg";
import useSticky from "@/hooks/use-sticky";
import logo from '@/assets/img/logo/logocasabrava.png';
// import CartOffcanvas from "@/components/offcanvas/cart-offcanvas";
// import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

export default function HeaderThree() {
  const {sticky,headerRef,headerFullWidth} = useSticky();
  // const [openCartMini, setOpenCartMini] = React.useState(false);
  // const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
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
              <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              {/* Comentado temporalmente
              <div className="col-xl-6 d-none d-xl-block">
                <div className="tp-header-4-menu header-main-menu">
                  <nav className="tp-main-menu-content">
                    <HeaderMenus />
                  </nav>
                </div>
              </div>
              */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                <div className="tp-header-4-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-4-btn d-flex align-items-center">
                    <Link
                      className="tp-btn-border-sm"
                      href="/"
                    >
                      CONTACTANOS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Comentado temporalmente
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      */}
    </>
  );
}
