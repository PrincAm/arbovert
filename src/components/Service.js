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
          {contactButton}
        </div>
      </div>
    </div>
  )
}

export default Service
