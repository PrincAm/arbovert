import React from 'react'
import {Desktop} from './App'
import {ReactComponent as ArrowDown} from '../assets/angle-down-solid.svg'
import {scroller} from 'react-scroll'

import '../styles/Welcome.css'

const scrollToService = () => {
  scroller.scrollTo('service', {duration: 2000, delay: 100, smooth: 'easeInOutQuad'})
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
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="Welcome-content">
        <div className="Welcome-question">
          <div>Pomůžeme Vám se stromy,</div>
          <div>i s těmi nejvyššími.</div>
          <div style={{fontSize: '0.5em'}}>Lorem ipsum, ........ lorem ipsum,....</div>
          <ArrowDown className="Welcome-arrowDown" onClick={() => scrollToService()} />
        </div>
        <div className="Welcome-message" />
      </div>
    </div>
  </div>
)

export default Welcome
