import Link from "next/link";
import React, { CSSProperties } from "react";

// type 
type IProps = {
  cls?: string;
};

const containerStyle: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
  padding: '80px 0'
};

const smallTextStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '18px',
  fontWeight: '400',
  letterSpacing: '0.02em',
  color: '#FFFFFF'
};

const bigTextStyle: CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 'clamp(3rem, 8vw, 6rem)',
  fontWeight: '500',
  letterSpacing: '-0.02em',
  color: '#FFFFFF',
  marginTop: '40px'
};

const linkStyle: CSSProperties = {
  color: '#FFFFFF',
  textDecoration: 'none',
  transition: 'opacity 0.3s ease',
  opacity: '1'
};

export default function BigText({cls=""}: IProps) {
  return (
    <div className={`sv-big-text-area ${cls}`} style={containerStyle}>
      <div className="container container-1530">
        <div className="sv-small-text-box d-flex justify-content-between">
          <span style={smallTextStyle}>ESTUDIO</span>
          <span style={smallTextStyle}>CASA BRAVA</span>
        </div>
        <div className="sv-big-text-box">
          <h4 className="sv-big-text tp-char-animation" style={bigTextStyle}>
            <Link 
              href="/contact" 
              style={linkStyle}
              className="hover-opacity"
            >
              CONTACTANOS
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
