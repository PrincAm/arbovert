import React from 'react'
import {scroller} from 'react-scroll'
import '../styles/Service.css'

const scrollToContact = () => () => {
	scroller.scrollTo('contact', {duration: 1500, delay: 100, smooth: true})
}

const Service = () =>
	<div className="Service">
		<div className="Service-arbo">
			<div className="Service-box">
				<h1>Arboristika</h1>
        <div>
          V arboristice provádíme všechny práce od rizikového kácení, přes odborné ošetřování stromů a zajišťování
          stromů, prořezávky ovocných stromů i likvidace dřevní hmoty.
        </div>
			</div>
		</div>
    <div className="Service-work">
      <div className="Service-box">
        <h1>Výškové práce</h1>
        <div>
          Ve výškových pracích pokrýváme podstatě všechna povolání. Jedná se především o opravy fasád, kompletní servis
          proti ptactvu, drobné klempířské a pokrývačské opravy, tlakové mytí fasád, mytí oken, opravy spár panelových
          domů a jiné.
        </div>
        <div className="Service-go-to-contact">
          <button onClick={scrollToContact()}>
            Kontakt
          </button>
        </div>
      </div>
    </div>
	</div>

export default Service