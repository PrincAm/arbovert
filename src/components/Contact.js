import React from 'react'
import map from '../assets/map.png'
import '../styles/Contact.css'

const Contact = () => (
  <div className="Contact">
    <div className="Contact-content">
      <h1>Kontaktujte nás</h1>
      <div className="Contact-upperDiv">
        <div className="Contact-inner-div">
          <div className="Contact-companyName">
            Arbovert
          </div>
          <div>
            Lukáš Kačer
          </div>
          <div>
            <a href="tel:+420739969933">(+420) 739 969 933</a><br/>
            <a href="mailto:lukas@arbovert.cz">lukas@arbovert.cz</a>
          </div>
        </div>
        <div className="Contact-map">
          <img src={map} />
        </div>
      </div>
      <div>
        Pusobime v Praze a stredoceskem kraji
      </div>
      <div className="Contact-socialMedia">
        <a href="https://facebook.com" className="icon-button facebook">
          <i className="icon-facebook" />
          <span />
        </a>
        <a href="https://plus.google.com" className="icon-button google-plus">
          <i className="icon-google-plus" />
          <span />
        </a>
      </div>
    </div>
  </div>
)

export default Contact