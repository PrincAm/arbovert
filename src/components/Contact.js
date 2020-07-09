import React from 'react'
import {useForm} from 'react-hook-form'

import map from '../assets/map.png'
import {ReactComponent as FacebookIcon} from '../assets/facebook.svg'
import {ReactComponent as PhoneLogo} from '../assets/phone.svg'

import '../styles/Contact.css'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const test = encode({
      'form-name': 'contact',
      ...data
    })
    console.log(test)
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': 'contact',
        ...data
      })
    })
      .then(() => console.log('SENT!'))
      .catch((error) => alert(error))
  }

  return (
    <div className="Contact">
      <div className="Contact-content">
        <h1>Kontaktujte nás</h1>
        <div className="Contact-upperDiv">
          <div className="Contact-inner-div">
            <div className="Contact-companyName">Arbovert</div>
            <div>Lukáš Kačer</div>
            <div>Jirsíkova 484/6</div>
            <div>Praha 8, 186 00</div>
            <div>IČO 87133156</div>
            <br />
            <div>
              <div className="Contact-mobile">
                <PhoneLogo />
                <a href="tel:+420739969933">+420 739 969 933</a>
              </div>
              <a href="mailto:lukaskacer@arbovert.cz" target="_blank" rel="noopener noreferrer">
                lukaskacer@arbovert.cz
              </a>
            </div>
          </div>
          <div className="Contact-map">
            <img src={map} alt="map of czech republic" />
          </div>
        </div>
        <br />
        <div>Působíme v celých Čechách!</div>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input name="example" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <input name="exampleRequired" ref={register({required: true})} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
        <div className="Contact-socialMedia">
          <a href="https://www.facebook.com/arbovertcz" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="Contact-facebook" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
