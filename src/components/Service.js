import React from 'react'
import {scroller} from 'react-scroll'
import '../styles/Service.css'

const scrollToContact = () => () => {
  scroller.scrollTo('contact', {duration: 1500, delay: 100, smooth: true})
}

const Service = () => {
  const contactButton = (
    <div className="Service-go-to-contact">
      <button onClick={scrollToContact()}>Kontakt</button>
    </div>
  )
  return (
    <div className="Service">
      <div className="Service-arbo">
        <div className="Service-box">
          <h1>Arboristika</h1>
          <div>
            V arboristice provádíme kompletní péče o dřeviny od rizikového kácení, přes odborné ošetřování a zajišťování
            stromů, prořezávky ovocných stromů, až po likvidaci dřevní hmoty.
          </div>
          {contactButton}
        </div>
      </div>
    </div>
  )
}

export default Service
