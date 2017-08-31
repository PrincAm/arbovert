import React, { Component } from 'react'
import '../styles/Header.css'
import Scroll from 'react-scroll'
import logo from '../assets/logo.svg'

var Link = Scroll.Link;

const Header = (props) =>
	<nav className="Header-nav">
		<div className="Header-logoName">
			<img src={logo}/>
			<div className="Header-name">
				ARBOVERT
			</div>
		</div>
		<div className="Header-spacer" />
		<ul>
			<li>
				<Link activeClass="active" className="Header-welcome" to="welcome" spy={true} smooth={true} duration={500} >DOMŮ</Link>
			</li>
			<li>
				<Link activeClass="active" className="Header-service" to="service" spy={true} smooth={true} duration={500} >SLUŽBY</Link>
			</li>
			<li>
				<Link activeClass="active" className="Header-reference" to="reference" spy={true} smooth={true} duration={500} >REFERENCE</Link>
			</li>
			<li>
				<Link activeClass="active" className="Header-contact" to="contact" spy={true} smooth={true} duration={500}>KONTAKT</Link>
			</li>
		</ul>
	</nav>

export default Header
