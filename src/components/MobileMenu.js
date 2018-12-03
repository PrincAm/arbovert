import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-scroll'
import '../styles/MobileMenu.css'

const MobileMenu = ({onHandleMobilMenu, menuClassName}) => (
  <div className={menuClassName}>
    <div>
      <Link
        activeClass="active"
        className="Header-welcome"
        to="welcome"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={2000}
        delay={50}
        offset={-70}
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
        duration={2000}
        delay={50}
        onClick={onHandleMobilMenu}>
        Služby
      </Link>
    </div>
    <div>
      <Link
        activeClass="active"
        className="Header-reference"
        to="reference"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={2000}
        delay={50}
        onClick={onHandleMobilMenu}>
        Reference
      </Link>
    </div>
    <div>
      <Link
        activeClass="active"
        className="Header-contact"
        to="contact"
        spy={true}
        smooth={'easeInOutQuad'}
        duration={2000}
        delay={50}
        onClick={onHandleMobilMenu}>
        Kontakt
      </Link>
    </div>
  </div>
)

export default MobileMenu

MobileMenu.propTypes = {
  onHandleMobilMenu: PropTypes.func.isRequired,
  menuClassName: PropTypes.string.isRequired
}
