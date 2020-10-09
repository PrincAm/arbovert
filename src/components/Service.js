import React from 'react'

import ContactUs from './ContactUs'
import '../styles/Service.css'

const Service = () => (
  <div className="Service">
    <div className="Service-background">
      <div className="Service-container">
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
        <h1>Výškové práce</h1>
        <div className="Service-upwork">
          Ve výškových pracích pokrýváme v podstatě všechna povolání
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
        <ContactUs />
      </div>
    </div>
  </div>
)

export default Service
