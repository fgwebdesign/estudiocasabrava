import React from "react";
import Marquee from "react-fast-marquee";

// marquee text
const marquee_text = [
  "Contactanos",
  "Contactanos",
  "Contactanos",
  "Contactanos",
];

// text style
const textStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '68px',
  fontWeight: '500',
  letterSpacing: '0.02em',
  textTransform: 'uppercase'
};

// prop type 
type IProps = {
  cls?: string;
  data_2?:boolean;
};

export default function LineTextThree({cls="",data_2=false}:IProps) {
  const textArray = marquee_text; 
  return (
    <div className={`tp-line-text-wrap tp-line-text-wrap-2 ${cls}`}>
      <div className="tp-line-text-slide">
        <Marquee speed={100} autoFill={true}>
          {textArray.map((text, index) => (
            <div key={index} className="tp-line-content mr-40">
              <h4 className="tp-footer-4-big-title" style={textStyle}>
                {text}
              </h4>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
