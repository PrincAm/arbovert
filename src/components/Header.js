import React from 'react'
import Scroll from 'react-scroll'
import logo from '../assets/logo.svg'
import '../styles/Header.css'

const Link = Scroll.Link
const scroller = Scroll.scroller

const scrollToWelcome = () => {
	scroller.scrollTo('welcome', {duration: 1500, delay: 100, smooth: true, offset: -70})
}

const Header = (props) =>
	<nav className="Header-nav">
		<div className="Header-logoName">
			<a onClick={scrollToWelcome}>
				<img alt="arbovert-logo" src={logo}/>
				<span>ARBOVERT</span>
			</a>
		</div>
		<div className="Header-spacer" />
		<ul>
			<li>
				<Link activeClass="active" className="Header-welcome" to="welcome"
							spy={true} smooth={true} duration={500} offset={-70}>Domů</Link>
			</li>
			<li>
				<Link activeClass="active" className="Header-service" to="service"
							spy={true} smooth={true} duration={500} >Služby</Link>
			</li>
			<li>
				<Link activeClass="active" className="Header-reference" to="reference"
							spy={true} smooth={true} duration={500}>Reference</Link>
			</li>
			<li>
				<Link activeClass="active" className="Header-contact" to="contact"
							spy={true} smooth={true} duration={500}>Kontakt</Link>
			</li>
		</ul>
	</nav>

export default Header
