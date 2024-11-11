import './index.scss';
import LogoE from '../../../assets/images/elite_logo.png';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import React, { useEffect, useRef } from 'react'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)
    //     gsap.timeline()
    //     .to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1
    //     })
    // },[]);

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
            d="M690 1544 c-167 -96 -308 -174 -312 -174 -5 0 -8 -165 -8 -367 l0
                -368 306 -175 c168 -96 314 -175 324 -175 10 0 156 79 325 175 l305 175 -2
                364 c-3 311 -5 365 -18 373 -80 46 -611 348 -613 347 -1 0 -139 -79 -307 -175z
                m581 -86 l258 -153 0 -305 1 -305 -265 -153 -265 -152 -265 152 -265 153 0
                306 0 305 77 44 c43 24 159 92 258 152 99 59 186 108 194 108 8 0 130 -69 272
                -152z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo