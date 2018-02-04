import React from 'react'
import '../styles/Welcome.css'

const Welcome = () =>
<div className="Welcome">
	<div className="Welcome-bg">
		<span />
		<span />
		<span />
		<span />
		<span />
	</div>

	<div className="Welcome-content">
		<h1>Arbovert</h1>
		<div className="Welcome-div-question">
		  Proč si vybrat právě nás?
		</div>
		<div className="Welcome-div">
			Jsme firma s individuálním přístupem a jsme velice flexibilní i v havarijních situacích.
		</div>
		<div className="Welcome-div">
			Používáme ty nejkvalitnější materiály které máme roky ověřeny od našich dodavatelů.
		</div>
		<div className="Welcome-div">
			Profesionalita a odbornost našich lidí je to, na čem zakládáme a našim cílem je se zdokonalovat a zlepšovat v 
      ostatních pracích, u kterých ostatní tápají.
		</div>
	</div>
</div>

export default Welcome