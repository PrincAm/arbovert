import React from 'react'
import {scroller} from 'react-scroll'
import '../styles/Footer.css'

const scrollToWelcome = () => {
  scroller.scrollTo('welcome', {duration: 2000, delay: 100, smooth: "easeInOutQuad", offset: -70})
}

const scrollToService = () => {
  scroller.scrollTo('service', {duration: 2000, delay: 100, smooth: "easeInOutQuad"})
}

const scrollToReference = () => {
  scroller.scrollTo('reference', {duration: 2000, delay: 100, smooth: "easeInOutQuad"})
}

const scrollToContact = () => {
  scroller.scrollTo('contact', {duration: 2000, delay: 100, smooth: "easeInOutQuad"})
}

const Footer = () =>
	<div className="Footer">
		<div className="Footer-menu Footer-group-center">
      <a onClick={scrollToWelcome}>
        <span>Domů</span>
      </a>
      <span> | </span>
      <a onClick={scrollToService}>
        <span>Služby</span>
      </a>
      <span> | </span>
      <a onClick={scrollToReference}>
        <span>Reference</span>
      </a>
      <span> | </span>
      <a onClick={scrollToContact}>
        <span>Kontakt</span>
      </a>
    </div>
		<div className="Footer-company-name Footer-group-center">
      © 2018 Arbovert
    </div>
		<div className="Footer-group-column">
      <div>
        739 969 933
      </div>
      <div className="Footer-mail">
        lukaaskacer@&#8203;gmail.com
      </div>
    </div>
	</div>

export default Footer