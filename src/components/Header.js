import React, {Component} from 'react'
import classNames from 'classnames'
import {BrowserRouter as Router} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'

import {Mobile, Desktop} from './App'
import MobileMenu from './MobileMenu'
import {ReactComponent as PhoneLogo} from '../assets/phone.svg'
import logo from '../assets/arbovert_logo.png'
import '../styles/Header.css'

class Header extends Component {
  state = {
    mobileMenuIsOpen: false
  }

  handleToggleMobilMenu = () => {
    this.setState({
      mobileMenuIsOpen: !this.state.mobileMenuIsOpen
    })
  }

  render() {
    const {mobileMenuIsOpen} = this.state
    const burgerIconClassName = classNames('Header-burger', {change: mobileMenuIsOpen})
    const mobileMenuClassName = classNames('MobileMenu', {visible: mobileMenuIsOpen})

    return (
      <Router>
        <div className="Header">
          <nav className="Header-nav">
            <div className="Header-logo">
              <NavHashLink to="/#" smooth>
                <img src={logo} alt="arbovert" />
              </NavHashLink>
            </div>
            <div className="Header-spacer" />
            <Mobile>
              <div className={burgerIconClassName} onClick={this.handleToggleMobilMenu}>
                <div className="Header-burger-bar1" />
                <div className="Header-burger-bar2" />
                <div className="Header-burger-bar3" />
              </div>
              <MobileMenu menuClassName={mobileMenuClassName} onHandleMobilMenu={this.handleToggleMobilMenu} />
            </Mobile>
            <Desktop>
              <div className="Header-menu">
                <ul>
                  <li>
                    <NavHashLink to="/#" smooth>
                      Domů
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink to="/#arboristika" smooth>
                      Arboristika
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink to="/#vyskove-prace" smooth>
                      Výškové práce
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink to="/#o-nas" smooth>
                      O nás
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink to="/#kontakt" smooth>
                      Kontakt
                    </NavHashLink>
                  </li>
                  <li>
                    <div className="Header-menu-mobile">
                      <PhoneLogo />
                      <a href="tel:+420739969933">+420 739 969 933</a>
                    </div>
                  </li>
                </ul>
              </div>
            </Desktop>
          </nav>
        </div>
      </Router>
    )
  }
}

export default Header
