import React from 'react'

import arbo1_200 from '../assets/arbo/arbo39_c_scale_w_690_zyv733_tckspm_c_scale,w_200.webp'
import arbo1_433 from '../assets/arbo/arbo39_c_scale_w_690_zyv733_tckspm_c_scale,w_433.webp'
import arbo1_200_jpg from '../assets/arbo/arbo39_c_scale,w_200.jpg'
import arbo2_200 from '../assets/arbo/arbo22_o_tijbap_c_scale_w_652_btfhrh_k0npvt_c_scale,w_200.webp'
import arbo2_433 from '../assets/arbo/arbo22_o_tijbap_c_scale_w_652_btfhrh_k0npvt_c_scale,w_629.webp'
import arbo2_200_jpg from '../assets/arbo/arbo22_o_tijbap_c_scale,w_200.jpg'

import upWork1_200 from '../assets/upWork/upwork4_mqkp3m_c_scale_w_511_mxkc4e_ojkdf6_c_scale,w_200.webp'
import upWork1_511 from '../assets/upWork/upwork4_mqkp3m_c_scale_w_511_mxkc4e_ojkdf6_c_scale,w_511.webp'
import upWork1_200_jpg from '../assets/upWork/upwork4_mqkp3m_c_scale,w_200.jpg'
import upWork2_200 from '../assets/upWork/upwork5_yfp8ul_c_scale_w_511_pstxw5_amcnjy_c_scale,w_200.webp'
import upWork2_511 from '../assets/upWork/upwork5_yfp8ul_c_scale_w_511_pstxw5_amcnjy_c_scale,w_511.webp'
import upWork2_200_jpg from '../assets/upWork/upwork5_yfp8ul_c_scale,w_200.jpg'

import '../styles/Service.css'

const Service = () => (
  <div className="Service">
    <div id="arboristika" className="Service-container">
      <div>
        <h1>Arboristika</h1>
        <div className="Service-arbo">
          V arboristice provádíme kompletní péči o dřeviny
          <ul>
            <li>rizikové kácení stromů</li>
            <li>odborné ošetřování stromů</li>
            <li>zajišťovaní stromů</li>
            <li>prořezávání ovocných stromů</li>
            <li>likvidaci dřevní hmoty</li>
          </ul>
        </div>
      </div>
      <div className="Service-images">
        <picture>
          <source 
            sizes="(max-width: 433px) 100vw, 433px"
            srcSet={`${arbo1_200} 200w,${arbo1_433} 433w`} 
            src={arbo1_200}
            type="image/webp" />
          <img
            height={400}
            src={arbo1_200_jpg}
            alt="cutted tree"
          />
        </picture>
        <picture>
          <source
            sizes="(max-width: 433px) 100vw, 433px"
            srcSet={`${arbo2_200} 200w,${arbo2_433} 433w`}
            src={arbo2_200}
            type="image/webp" />
            <source src={arbo2_200_jpg} type="image/jpeg" />
          <img
            height={400}
            src={arbo2_200_jpg}
            alt="cutted tree"
          />
        </picture>
      </div>
    </div>
    <div id="vyskove-prace" className="Service-container">
      <div>
        <h1>Výškové práce</h1>
        <div className="Service-upwork">
          Ve výškových pracích pokrýváme v podstatě
          <br /> všechna povolání
          <ul>
            <li>opravy fasád</li>
            <li>kompletní servis proti ptactvu</li>
            <li>drobné klempířské a pokrývačské opravy</li>
            <li>tlakové mytí fasád</li>
            <li>mytí oken</li>
            <li>nátěry plechových střech a čištění okapů</li>
            <li>opravy spár panelových domů a jiné</li>
          </ul>
          Nezávazné nacenění práce je samozřejmostí!
        </div>
      </div>
      <div className="Service-images">
        <picture>
          <source
            sizes="(max-width: 511px) 100vw, 511px"
            srcSet={`${upWork1_200} 200w,${upWork1_511} 511w`}
            src={upWork1_200} 
            type="image/webp" />
          <source src={upWork1_200_jpg} type="image/jpeg" />
          <img
            height={430}
            src={upWork1_200_jpg}
            alt="building"
          />
        </picture>
        <picture>
          <source
            sizes="(max-width: 511px) 100vw, 511px"
            srcSet={`${upWork2_200} 200w,${upWork2_511} 511w`}
            src={upWork2_200} 
            type="image/webp" />
          <img
            height={430}
            src={upWork2_200_jpg}
            alt="building web"
          />
        </picture>
      </div>
    </div>
  </div>
)

export default Service
