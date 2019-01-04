import React, {Component} from 'react'
import {Link, scroller} from 'react-scroll'
import classNames from 'classnames'
import {Mobile, Desktop} from './App'
import MobileMenu from './MobileMenu'
import logo from '../assets/arbovert_logo.png'
import '../styles/Header.css'

class Header extends Component {
  state = {
    mobileMenuIsOpen: false
  }

  handleScrollToWelcome = () => {
    scroller.scrollTo('welcome', {duration: 2000, delay: 100, smooth: 'easeInOutQuad'})
    this.setState({
      mobileMenuIsOpen: false
    })
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
      <div className="Header">
        <nav className="Header-nav">
          <div className="Header-logo">
            <a onClick={this.handleScrollToWelcome}>
              <img src={logo} alt="logo arbovert" />
            </a>
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
                  <Link
                    activeClass="active"
                    className="Header-welcome"
                    to="welcome"
                    spy={true}
                    smooth={'easeInOutQuad'}
                    duration={1500}
                    delay={100}
                    onClick={this.handleOpenMenu}>
                    Domů
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="Header-service"
                    to="service"
                    spy={true}
                    smooth={'easeInOutQuad'}
                    duration={1500}
                    delay={100}
                    onClick={this.handleOpenMenu}>
                    Služby
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="Header-reference"
                    to="reference"
                    spy={true}
                    smooth={'easeInOutQuad'}
                    duration={1500}
                    delay={100}
                    onClick={this.handleOpenMenu}>
                    Fotky práce
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="Header-contact"
                    to="contact"
                    spy={true}
                    smooth={'easeInOutQuad'}
                    duration={1500}
                    delay={100}
                    onClick={this.handleOpenMenu}>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </Desktop>
        </nav>
      </div>
    )
  }
}

export default Header
