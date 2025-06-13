'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import { MenuThree } from "@/components/svg";
import logo_1 from '@/assets/img/logo/estudiocb.svg';
import logo_2 from '@/assets/img/logo/estudiocb.svg';
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

export default function HeaderFour() {
  const {sticky,headerRef,headerFullWidth,adjustMenuBackground} = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-3-area mt-35 z-index-5 ${sticky?'header-sticky':''}`}>
          <span className="menu-bg"></span>
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link className="logo-1" href="/">
                    <Image src={logo_1} alt="logo" />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image src={logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        <HeaderMenus />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6 d-flex justify-content-end">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-6-menu-box d-xl-none">
                    <button 
                      className="tp-header-6-menubar"
                      onClick={() => setOpenOffCanvas(true)}
                    >
                      <MenuThree />
                    </button>
                  </div>
                  <div className="tp-header-3-btn d-none d-xl-block">
                    <Link className="tp-btn-white" href="/contact">
                      Contactanos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
