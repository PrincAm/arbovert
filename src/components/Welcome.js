import React from 'react'
import {Desktop} from './App'
import {ReactComponent as ArrowDown} from '../assets/arrow_down.svg'
import {scroller, Link} from 'react-scroll'

import '../styles/Welcome.css'

const scrollToService = () => {
  scroller.scrollTo('service', {duration: 500, delay: 100, smooth: 'easeInOutQuad'})
}

const Welcome = () => (
  <div className="Welcome">
    <Desktop>
      <div className="Welcome-bg">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </Desktop>
    <div className="Welcome-container">
      <div className="Welcome-content">
        <div className="Welcome-motto">
          <div>
            Pomůžeme Vám se stromy a budovami,
            <br />i s těmi nejvyššími
          </div>
          <div className="Welcome-mottoSecondary">
            kácení, ošetřování, prořezávání
            <br />
            opravy, mytí, nátěry
          </div>
          <div className="Welcome-links">
            <ArrowDown className="Welcome-arrowDown" onClick={() => scrollToService()} />
            <Link
              className="Welcome-formLink"
              to="form"
              spy={true}
              smooth={'easeInOutQuad'}
              duration={1500}
              delay={100}
              offset={-80}>
              Poptávka
            </Link>
          </div>
        </div>
        <div className="Welcome-message" />
      </div>
    </div>
  </div>
)

export default Welcome
