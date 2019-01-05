import React from 'react'
import {scroller} from 'react-scroll'

import {ReactComponent as ArrowDown} from '../assets/arrow_down.svg'
import '../styles/ContactUs.css'

const scrollToContact = () => {
  scroller.scrollTo('contact', {duration: 1500, delay: 100, smooth: true})
}

const ContactUs = () => (
  <div className="ContactUs">
    <div className="ContactUs-wrapper" onClick={() => scrollToContact()}>
      Kontaktujte nás
      <ArrowDown className="ContactUs-arrowDown" />
    </div>
  </div>
)

export default ContactUs
