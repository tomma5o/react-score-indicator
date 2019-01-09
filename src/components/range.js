import React from "react";
import ReactDOM from "react-dom";

import { Svg } from "./styled";

export default function SvgComp(props) {
  console.log(props);
  const { highlited } = props;
  return (
    <Svg
      id="score_graph"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="13 10 475 390"
    >
      <path
        className={`step_1 ${highlited >= 1 && "active"}`}
        fill="#FF2D2D"
        d="M67.16,397.93A236,236,0,0,1,16,285.4l28.07-4.52a207.5,207.5,0,0,0,45,98.94Z"
      />
      <path
        className={`step_2 ${highlited >= 2 && "active"}`}
        fill="#FF9B55"
        d="M14.62,275.41A237.85,237.85,0,0,1,13,247.62a235.34,235.34,0,0,1,19.59-94.48l26.07,11.35a207.08,207.08,0,0,0-17.22,83.13,211.93,211.93,0,0,0,1.42,24.48Z"
      />
      <path
        className={`step_3 ${highlited >= 3 && "active"}`}
        fill="#FFD555"
        d="M62.38,156.42,36.81,144A238,238,0,0,1,118,50.78l15.86,23.61A209.57,209.57,0,0,0,62.38,156.42Z"
      />
      <path
        className={`step_4 ${highlited >= 4 && "active"}`}
        fill="#E0EC55"
        d="M141.29,69.6,126.44,45.34A236.72,236.72,0,0,1,245.06,10.67l.58,28.44A208.19,208.19,0,0,0,141.29,69.6Z"
      />
      <path
        className={`step_5 ${highlited >= 5 && "active"}`}
        fill="#CDEC55"
        d="M358.86,69.69A208.25,208.25,0,0,0,254.53,39.11l.6-28.43a236.62,236.62,0,0,1,118.6,34.77Z"
      />
      <path
        className={`step_6 ${highlited >= 6 && "active"}`}
        fill="#95EC55"
        d="M437.7,156.59A209.46,209.46,0,0,0,366.33,74.5l15.89-23.6a238.18,238.18,0,0,1,81.06,93.26Z"
      />
      <path
        className={`step_7 ${highlited >= 7 && "active"}`}
        fill="#5AEC55"
        d="M485.37,275.58l-28.25-3.32a210.66,210.66,0,0,0,1.44-24.64,207.24,207.24,0,0,0-17.16-83l26.08-11.33A235.4,235.4,0,0,1,487,247.62,241.16,241.16,0,0,1,485.37,275.58Z"
      />
      <path
        className={`step_8 ${highlited >= 8 && "active"}`}
        fill="#1ED955"
        d="M433.27,397.9l-22-18a208.14,208.14,0,0,0,44.61-98.81L484,285.57A236.55,236.55,0,0,1,433.27,397.9Z"
      />
    </Svg>
  );
}
