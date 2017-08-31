import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Contact from './Contact'
import Reference from './Reference'
import Service from './Service'
import Scroll from 'react-scroll'
import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Welcome.css'
import '../styles/Contact.css'
import '../styles/Reference.css'

// var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
  return deltaTop;
};

class App extends Component {
  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      // console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render () {
    return (
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

        <a onClick={this.scrollToTop}>To the top!</a>
        
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
