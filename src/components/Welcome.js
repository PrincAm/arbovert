import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'

import {ReactComponent as ArrowDown} from '../assets/arrow_down.svg'

import '../styles/Welcome.css'

const Welcome = () => (
  <div className="Welcome">
    <div className="Welcome-bg" />
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
            <Router>
              <NavHashLink className="Welcome-serviceLink" to="/#sluzby" smooth>
                <ArrowDown className="Welcome-arrowDown" />
              </NavHashLink>
              <NavHashLink className="Welcome-formLink" to="/#kontakt" smooth>
                Poptávka
              </NavHashLink>
            </Router>
          </div>
        </div>
        <div className="Welcome-message" />
      </div>
    </div>
  </div>
)

export default Welcome
