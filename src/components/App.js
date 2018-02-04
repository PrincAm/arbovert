import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Contact from './Contact'
import Reference from './Reference'
import Service from './Service'
import {Element} from 'react-scroll'
import '../styles/App.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <Header />
    </div>

    <Element name="welcome" >
      <Welcome />
    </Element>

    <Element name="service" >
      <Service />
    </Element>

    <Element name="reference" >
      <Reference />
    </Element>

    <Element name="contact" >
      <Contact />
    </Element>
    
    <div className="App-footer">
      <Footer />
    </div>
  </div>
)

export default App
