import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Contact from './Contact'
import Reference from './Reference'
import Service from './Service'
import {Element} from 'react-scroll'
import Responsive from 'react-responsive'
import '../styles/App.css'

export const Mobile = (props) => <Responsive {...props} maxWidth={767} />
export const Desktop = (props) => <Responsive {...props} minWidth={767} />

const App = () => (
  <div className="App">
    <Header />

    <Element name="welcome">
      <Welcome />
    </Element>

    <Element name="service">
      <Service />
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
