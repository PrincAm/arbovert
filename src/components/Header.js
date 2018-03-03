import React, {Component} from 'react'
import {Link, scroller} from 'react-scroll'
import classNames from 'classnames'
import {Mobile, Desktop} from './App'
import MobileMenu from './MobileMenu'
import '../styles/Header.css'

class Header extends Component {

  state = {
    mobileMenuIsOpen: false
  }

  handleScrollToWelcome = () => {
    scroller.scrollTo('welcome', {duration: 2000, delay: 100, smooth: "easeInOutQuad", offset: -70})
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
    const burgerIconClassName = classNames('Header-burger-icon', {change: mobileMenuIsOpen})
    const mobileMenuClassName = classNames('MobileMenu', {visible: mobileMenuIsOpen})

    return (
      <nav className="Header-nav">
        <div className="Header-logo">
          <a onClick={this.handleScrollToWelcome}>
            <span>Arbovert</span>
          </a>
        </div>
        <div className="Header-spacer" />
        <Mobile>
          <div className={burgerIconClassName} onClick={this.handleToggleMobilMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <MobileMenu menuClassName={mobileMenuClassName} onHandleMobilMenu={this.handleToggleMobilMenu}/>
        </Mobile>
        <Desktop>
          <div className="Header-menu">
            <ul>
              <li>
                <Link activeClass="active" className="Header-welcome" to="welcome"
                      spy={true} smooth={"easeInOutQuad"} duration={2000}
                      delay={50} offset={-70} onClick={this.handleOpenMenu}>Domů</Link>
              </li>
              <li>
                <Link activeClass="active" className="Header-service" to="service"
                      spy={true} smooth={"easeInOutQuad"} duration={2000}
                      delay={50} onClick={this.handleOpenMenu}>Služby</Link>
              </li>
              <li>
                <Link activeClass="active" className="Header-reference" to="reference"
                      spy={true} smooth={"easeInOutQuad"} duration={2000} delay={50}
                      onClick={this.handleOpenMenu}>Reference</Link>
              </li>
              <li>
                <Link activeClass="active" className="Header-contact" to="contact"
                      spy={true} smooth={"easeInOutQuad"} duration={2000}
                      delay={50} onClick={this.handleOpenMenu}>Kontakt</Link>
              </li>
            </ul>
          </div>
        </Desktop>
      </nav>
    )
  }
}

export default Header
