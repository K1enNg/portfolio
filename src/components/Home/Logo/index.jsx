import './index.scss';
import LogoE from '../../../assets/images/coding_logo.png';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';
import React, { useEffect, useRef } from 'react'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        gsap
        .timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
    },[]);

  return (
    <div className="logo-container" ref={bgRef}>
        <img ref={solidLogoRef} className='solid-logo ' src={LogoE} alt='logo' />

        <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M4489 4070 c-9 -5 -21 -22 -27 -37 -6 -16 -87 -370 -181 -788 -94
              -418 -245 -1091 -336 -1495 -91 -404 -165 -745 -165 -758 0 -12 11 -34 25 -47
              l24 -25 294 0 c266 0 297 2 316 18 23 18 19 3 236 967 42 187 103 457 135 600
              32 143 97 433 145 645 47 212 109 483 136 602 56 249 58 276 26 306 -23 22
              -29 22 -318 22 -166 0 -301 -5 -310 -10z m467 -167 c-3 -10 -145 -639 -316
              -1398 -170 -759 -312 -1390 -315 -1402 -5 -23 -7 -23 -180 -23 -140 0 -175 3
              -175 13 0 8 140 634 311 1393 170 758 313 1391 316 1407 l6 27 179 0 c166 0
              179 -1 174 -17z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo