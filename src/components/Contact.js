import React from 'react'
import '../styles/Contact.css'

const Contact = () => (
  <div className="Contact">
    <div className="Contact-bg">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <h1>Kontakt</h1>
    <div className="Contact-content">
      <div className="Contact-inner-div">
        <div className="Contact-companyName">
          Arbovert
        </div>
        <div>
          Lukáš Kačer
        </div>
        <div>
          <b>739 969 933</b><br/>
          <b>lukaaskacer@gmail.com</b>
        </div>
      </div>
      <div className="Contact-inner-div">
        Ulice<br/>
        Mesto<br/>
        PSC
      </div>
    </div>
  </div>
)

export default Contact