import React, { CSSProperties } from 'react';
import Image from 'next/image';
import LineTextThree from '@/components/line-text/line-text-3';
import logo from '@/assets/img/logo/logoestudioblanco.svg';
import Link from 'next/link';

const containerStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF'
};
  
const topTextStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '42px',
  fontWeight: '500',
  color: '#FFFFFF',
  letterSpacing: '-0.02em',
  marginBottom: '0'
};

const buttonStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '16px',
  fontWeight: '500',
  color: '#000000',
  backgroundColor: '#FFFFFF',
  padding: '20px 40px',
  borderRadius: '0',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  display: 'inline-block',
  border: '1px solid #FFFFFF'
};

const logoStyle: CSSProperties = {
  width: '280px',
  height: 'auto',
  marginBottom: '40px'
};

const titleStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '18px',
  fontWeight: '600',
  color: '#FFFFFF',
  marginBottom: '25px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
};

const descriptionStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '16px',
  fontWeight: '400',
  color: '#FFFFFF',
  lineHeight: '1.6',
  textTransform: 'uppercase'
};

const linkStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '15px',
  fontWeight: '400',
  color: '#FFFFFF',
  textDecoration: 'none',
  lineHeight: '2',
  transition: 'opacity 0.3s ease',
  textTransform: 'uppercase'
};

const copyrightStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  color: '#FFFFFF',
  opacity: '0.8'
};

const socialLinkStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  fontWeight: '500',
  color: '#FFFFFF',
  marginLeft: '30px',
  textDecoration: 'none'
};

export default function FooterThree() {
  return (
    <footer>
      <div className="tp-footer-4-area pt-100 pb-100" style={containerStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
        <div className="container container-1480">
          <div className="tp-footer-4-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-left">
                  <p style={topTextStyle}>¿Tienes un proyecto en mente? <br /> ¡Hablemos!</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-right text-start text-md-end">
                  <Link href="/" style={buttonStyle}>HABLEMOS</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-2-area pb-20" style={containerStyle}>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo mb-30">
                  <Link href="/">
                    <Image src={logo} alt="Casa Brava" style={logoStyle} />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p style={descriptionStyle}>ESTAMOS UBICADOS EN MONTEVIDEO, URUGUAY <br /> Y NOS DEDICAMOS AL DISEÑO DE INTERIORES.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 style={titleStyle}>NAVEGACIÓN</h4>
                  <ul>
                    <li><Link href="/" style={linkStyle}>INICIO</Link></li>
                    <li><Link href="/" style={linkStyle}>SOBRE NOSOTROS</Link></li>
                    <li><Link href="/" style={linkStyle}>PROYECTOS</Link></li>
                    <li><Link href="/" style={linkStyle}>SERVICIOS</Link></li>
                    <li><Link href="/" style={linkStyle}>CONTACTO</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 style={titleStyle}>OFICINA</h4>
                <div className="tp-footer-2-contact-item mb-20">
                  <span><a href="#" target="_blank" style={linkStyle}>21 DE SETIEMBRE 2719, ESQUINA WILLIMAN</a></span>
                </div>
                <div className="tp-footer-2-contact-item mb-20">
                  <span><a href="tel:+59899123456" style={linkStyle}>TELÉFONO: + 598 97 989 211</a></span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span><a href="mailto:contact@casabrava.com" style={linkStyle}>EMAIL: CONTACT@CASABRAVA.COM</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-copyright-2-area pt-30 pb-30" style={containerStyle}>
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p style={copyrightStyle}>Todos los derechos reservados — {new Date().getFullYear()} © Casabrava</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a href="#" style={socialLinkStyle}>Linkedin</a>
                <a href="#" style={socialLinkStyle}>Twitter</a>
                <a href="#" style={socialLinkStyle}>Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
