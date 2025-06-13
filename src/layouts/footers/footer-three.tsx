import React, { CSSProperties } from 'react';
import Image from 'next/image';
import LineTextThree from '@/components/line-text/line-text-3';
import logo from '@/assets/img/logo/estudiocb.svg';
import Link from 'next/link';

const containerStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
  borderTop: 'none',
  borderBottom: 'none',
  width: '100%',
  maxWidth: '100%',
  padding: '0 5%'
};

const mainFooterStyle: CSSProperties = {
  backgroundColor: '#000000',
  padding: '100px 0',
  borderTop: 'none',
  borderBottom: 'none',
  width: '100%',
  maxWidth: '100%'
};

const copyrightSectionStyle: CSSProperties = {
  backgroundColor: '#000000',
  padding: '30px 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
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
  opacity: '0.8',
  marginBottom: '5px'
};

const designerLinkStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  color: '#FFFFFF',
  opacity: '0.8',
  textDecoration: 'none',
  transition: 'opacity 0.3s ease'
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
    <footer style={{ backgroundColor: '#000000', width: '100%', maxWidth: '100%' }}>
      <div className="tp-footer-4-area" style={mainFooterStyle}>
        <div style={{ width: '100%', maxWidth: '100%', marginTop: '30px' }}>
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-2-area" style={containerStyle}>
        <div style={{ width: '100%', maxWidth: '100%' }}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-50">
              <div className="tp-footer-2-widget">
                <div className="tp-footer-2-widget-logo mb-30">
                  <Link href="/">
                    <Image src={logo} alt="Casa Brava" style={logoStyle} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-50">
              <div className="tp-footer-2-widget">
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
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-50">
              <div className="tp-footer-2-widget">
                <h4 style={titleStyle}>OFICINA</h4>
                <div className="tp-footer-2-contact-item mb-20">
                  <span><a href="#" target="_blank" style={linkStyle}>21 DE SETIEMBRE 2719, ESQUINA WILLIMAN</a></span>
                </div>
                <div className="tp-footer-2-contact-item mb-20">
                  <span><a href="tel:+59897666077" style={linkStyle}>TELÉFONO: +598 97 666 077</a></span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span><a href="mailto:jiparodi@estudiocasabrava.com" style={linkStyle}>EMAIL: jiparodi@estudiocasabrava.com</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-copyright-2-area" style={copyrightSectionStyle}>
        <div style={{ width: '100%', maxWidth: '100%', padding: '0 5%' }}>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p style={copyrightStyle}>
                  Todos los derechos reservados — {new Date().getFullYear()} © Estudio Casa Brava
                </p>
                <p style={copyrightStyle}>
                  Designed by: <a href="https://www.fgwebdesign.dev/" target="_blank" rel="noopener noreferrer" style={designerLinkStyle}>FG WEB DESIGNS</a>
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a href="#" style={socialLinkStyle}>LINKEDIN</a>
                <a href="#" style={socialLinkStyle}>INSTAGRAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
