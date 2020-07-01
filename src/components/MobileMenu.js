import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-scroll'
import '../styles/MobileMenu.css'
import {ReactComponent as PhoneLogo} from '../assets/phone.svg'

const MobileMenu = ({onHandleMobilMenu, menuClassName}) => (
  <div className={menuClassName}>
    <div>
      <Link
        activeClass="active"
        className="Header-welcome"
        to="welcome"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={1500}
        delay={50}
        offset={-80}
        onClick={onHandleMobilMenu}>
        Domů
      </Link>
    </div>
    <div>
      <Link
        activeClass="active"
        className="Header-service"
        to="service"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={1500}
        delay={50}
        onClick={onHandleMobilMenu}>
        Služby
      </Link>
    </div>
    <div>
      <Link
        activeClass="active"
        className="Header-aboutUs"
        to="company"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={1500}
        delay={100}
        onClick={onHandleMobilMenu}>
        O nás
      </Link>
    </div>
    <div>
      <Link
        activeClass="active"
        className="Header-reference"
        to="reference"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={1500}
        delay={50}
        onClick={onHandleMobilMenu}>
        Fotky práce
      </Link>
    </div>
    <div>
      <Link
        activeClass="active"
        className="Header-contact"
        to="contact"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={1500}
        delay={50}
        onClick={onHandleMobilMenu}>
        Kontakt
      </Link>
    </div>
    <div className="MobileMenu-mobile">
      <PhoneLogo />
      <a href="tel:+420739969933">+420 739 969 933</a>
    </div>
  </div>
)

export default MobileMenu

MobileMenu.propTypes = {
  onHandleMobilMenu: PropTypes.func.isRequired,
  menuClassName: PropTypes.string.isRequired
}
