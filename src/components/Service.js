import React from 'react'
import Scroll from 'react-scroll'
import '../styles/Service.css'

const scroller = Scroll.scroller

// const scrollToContact = () => () => {
// 	scroller.scrollTo('contact', {duration: 1500, delay: 100, smooth: true})
// }

const Service = () =>
	<div className="Service">
		<h1>Služby</h1>
		<div className="Service-content">
			<div className="Service-box1">
				Sluzba 1
			</div>
			<div className="Service-box2">
				Sluzba 2
			</div>
		</div>
    {/*<div className="Service-contact">
			<h2>
				Rad bych si Vas objednal.
			</h2>
			<button value="Test 2" onClick={scrollToContact()} >
				Test 2
			</button>
		</div>*/}
	</div>

export default Service