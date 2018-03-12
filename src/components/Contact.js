import React from 'react'
// import map from '../assets/map.png'
import '../styles/Contact.css'

const Contact = () => (
  <div className="Contact">
    <div className="Contact-content">
      <div className="Contact-inner-div">
        <h1>Kontaktujte nás</h1>
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
      {/*
      <div className="Contact-inner-div-map">
        <img style={{paddingLeft: '20px'}} src={map} />
        <div style={{fontSize: '0.8em'}}>
          Pusobime v Praze a stredoceskem kraji.
        </div>
      </div>
      */}
    </div>
  </div>
)

export default Contact