import React from 'react'
import Scroll from 'react-scroll'
import '../styles/Service.css'

const scroller = Scroll.scroller

const scrollToContact = () => () => {
	scroller.scrollTo('contact', {duration: 1500, delay: 100, smooth: true})
}

const Service = () =>
	<div className="Service">
		<h1>Služby</h1>
		<div className="Service-content">
			<div>
				<div className="Service-box">
					<h2>Sluzba 1</h2>
					<div>
						Neco o prvni sluzbe
					</div>
				</div>
				<div className="Service-box">
					<h2>Sluzba 2</h2>
					<div>
						Neco o druhe
					</div>
				</div>
			</div>
			<div>
				<div className="Service-box">
					<h2>Sluzba 3</h2>
					<div>
						O treti
					</div>
				</div>
				<div className="Service-box">
					<h2>Sluzba 4</h2>
					<div>
						A ctvrte
					</div>
				</div>
			</div>
		</div>
		<div className="Service-contact">
			<h2>
				Rad bych si Vas objednal.
			</h2>
			<button value="Test 2" onClick={scrollToContact()} >
				Test 2
			</button>
		</div>
	</div>

export default Service