import React, {Component} from 'react'
import {Link, scroller} from 'react-scroll'
import Responsive from 'react-responsive';
import '../styles/Header.css'

const scrollToWelcome = () => {
	scroller.scrollTo('welcome', {duration: 2000, delay: 100, smooth: "easeInOutQuad", offset: -70})
}

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />
const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

class Header extends Component {

  state = {
    mobileMenuIsOpen: false
  }

  handleOpenMenu = () => {
    this.setState({
      mobileMenuIsOpen: !this.state.mobileMenuIsOpen
    })
  }

  render() {

    const {mobileMenuIsOpen} = this.state

    const menu = (
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
    )

    return (
      <nav className="Header-nav">
        <div className="Header-logo">
          <a onClick={scrollToWelcome}>
            {/*<img alt="arbovert-logo" src={logo}/>*/}
            <span>Arbovert</span>
          </a>
        </div>
        <div className="Header-spacer" />
        <Mobile>
         <div className="Header-burger-icon" onClick={this.handleOpenMenu}>
           <div></div>
           <div></div>
           <div></div>
         </div>
         {mobileMenuIsOpen && menu}
        </Mobile>
        <Desktop>
          <div className="Header-menu">
            {menu}
          </div>
        </Desktop>
      </nav>
    )
  }
}

export default Header
