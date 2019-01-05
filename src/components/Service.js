import React from 'react'

import ContactUs from './ContactUs'
import '../styles/Service.css'

const Service = () => (
  <div className="Service">
    <div className="Service-arbo">
      <div className="Service-box">
        <h1>Arboristika</h1>
        <div>
          V arboristice provádíme kompletní péče o dřeviny
          <ul>
            <li>rizikové kácení stromů</li>
            <li>odborné ošetřování stromů</li>
            <li>zajišťovaní stromů</li>
            <li>prořezávání ovocných stromů</li>
            <li>likvidaci dřevní hmoty</li>
          </ul>
          Nezávazné nacenění práce je samozřejmostí!
        </div>
        <ContactUs />
      </div>
    </div>
  </div>
)

export default Service
