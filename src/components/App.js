import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Contact from './Contact'
import Reference from './Reference'
import Service from './Service'
import {Element} from 'react-scroll'
import Responsive from 'react-responsive';
import '../styles/App.css'

export const Mobile = props => <Responsive {...props} maxWidth={767} />
export const Desktop = props => <Responsive {...props} minWidth={767} />

const App = () => {
   const appContainer = (
     <div>
       <div className="App-header">
         <Header />
       </div>

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

       <div className="App-footer">
         <Footer />
       </div>
     </div>
   )

  return (
    <div>
      <Desktop>
        <div className="App">
          {appContainer}
        </div>
      </Desktop>
      <Mobile>
        <div className="App-mobile">
          {appContainer}
        </div>
      </Mobile>
    </div>
  )
}

export default App
