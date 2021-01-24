import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'

import '../styles/MobileMenu.css'
import {ReactComponent as PhoneLogo} from '../assets/phone.svg'

const MobileMenu = ({onHandleMobilMenu, menuClassName}) => (
  <div className={menuClassName}>
    <Router>
      <div>
        <NavHashLink to="/#" smooth onClick={onHandleMobilMenu}>
          Domů
        </NavHashLink>
      </div>
      <div>
        <NavHashLink to="/#arboristika" smooth onClick={onHandleMobilMenu}>
          Arboristika
        </NavHashLink>
      </div>
      <div>
        <NavHashLink to="/#vyskove-prace" smooth onClick={onHandleMobilMenu}>
          Výškové práce
        </NavHashLink>
      </div>
      <div>
        <NavHashLink to="/#o-nas" smooth onClick={onHandleMobilMenu}>
          O nás
        </NavHashLink>
      </div>
      <div>
        <NavHashLink to="/#kontakt" smooth onClick={onHandleMobilMenu}>
          Kontakt
        </NavHashLink>
      </div>
    </Router>
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
