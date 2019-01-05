import React from 'react'

import map from '../assets/map.png'
import {ReactComponent as FacebookIcon} from '../assets/facebook.svg'

import '../styles/Contact.css'

const Contact = () => (
  <div className="Contact">
    <div className="Contact-content">
      <h1>Kontaktujte nás</h1>
      <div className="Contact-upperDiv">
        <div className="Contact-inner-div">
          <div className="Contact-companyName">Arbovert</div>
          <div>Lukáš Kačer</div>
          <div>
            <a href="tel:+420739969933">(+420) 739 969 933</a>
            <br />
            <a href="mailto:lukaskacer@arbovert.cz">lukaskacer@arbovert.cz</a>
          </div>
        </div>
        <div className="Contact-map">
          <img src={map} alt="map of czech republic" />
        </div>
      </div>
      <div>Působíme v Praze a středočeském kraji</div>
      <div className="Contact-socialMedia">
        <a href="https://www.facebook.com/arbovertcz" target="_blank">
          <FacebookIcon />
        </a>
      </div>
    </div>
  </div>
)

export default Contact
