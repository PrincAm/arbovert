import React from 'react'
import {Link, scroller} from 'react-scroll'
import '../styles/Header.css'

const scrollToWelcome = () => {
	scroller.scrollTo('welcome', {duration: 2000, delay: 100, smooth: "easeInOutQuad", offset: -70})
}

const Header = (props) =>
	<nav className="Header-nav">
		<div className="Header-logo">
			<a onClick={scrollToWelcome}>
        {/*<img alt="arbovert-logo" src={logo}/>*/}
				<span>Arbovert</span>
			</a>
		</div>
		<div className="Header-spacer" />
    <div className="Header-menu">
      <ul>
        <li>
          <Link activeClass="active" className="Header-welcome" to="welcome"
                spy={true} smooth={"easeInOutQuad"} duration={2000} delay={50} offset={-70}>Domů</Link>
        </li>
        <li>
          <Link activeClass="active" className="Header-service" to="service"
                spy={true} smooth={"easeInOutQuad"} duration={2000}
                delay={50}>Služby</Link>
        </li>
        <li>
          <Link activeClass="active" className="Header-reference" to="reference"
                spy={true} smooth={"easeInOutQuad"} duration={2000} delay={50}>Reference</Link>
        </li>
        <li>
          <Link activeClass="active" className="Header-contact" to="contact"
                spy={true} smooth={"easeInOutQuad"} duration={2000} delay={50}>Kontakt</Link>
        </li>
      </ul>
    </div>
	</nav>

export default Header
