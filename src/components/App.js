import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Contact from './Contact'
import Company from './Company'
import Reference from './Reference'
import Service from './Service'
import {Element} from 'react-scroll'
import Responsive from 'react-responsive'
import '../styles/App.css'

export const Mobile = (props) => <Responsive {...props} maxWidth={767} />
export const Desktop = (props) => <Responsive {...props} minWidth={767} />

const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Arbovert | Arboristika a výškové práce | Praha</title>
      <meta name="description" content="Arboristika a výškové práce" />
      <meta
        name="keywords"
        content="hroty proti holubům,sítě proti holubům,výškové práce,práce ve výškách,mytí oken,mytí fasád čištění fasád,opravy fasád,péčě o dřeviny,likvidace dřeva,prořezávání stromů,arboristika,rizikové kácení stromů"
      />
      <link rel="canonical" href="https://arbovert.cz/" />
    </Helmet>
    <Header />

    <Element name="welcome">
      <Welcome />
    </Element>

    <Element name="service">
      <Service />
    </Element>

    <Element name="company">
      <Company />
    </Element>

    <Element name="reference">
      <Reference />
    </Element>

    <Element name="contact">
      <Contact />
    </Element>

    <Footer />
  </div>
)

export default App
