import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Element} from 'react-scroll'

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
  const [isFormSent, setFormSent] = useState(false)

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': 'contact',
        ...data
      })
    }).then(() => setFormSent(true))
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
        <div className="Contact-formWrapper Contact-maxWidth">
          <Element name="form">
            {isFormSent ? (
              <div className="Contact-formThank">Děkujeme Vám za dotaz! Budeme Vás brzy kontaktovat.</div>
            ) : (
              <>
                <h2>Nebo nás kontaktujte pomocí formuláře</h2>
                <form
                  name="contact"
                  method="post"
                  action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit(onSubmit)}
                  className="Contact-form">
                  <div className="Contact-inputs">
                    <div className="Contact-inputWrapper">
                      <label>Jméno*</label>
                      <input name="name" ref={register({required: true})} className="Contact-input" />
                      {errors.name && <span className="Contact-input-error">Jméno je povinné</span>}
                    </div>
                    <div className="Contact-inputWrapper">
                      <label>Email*</label>
                      <input name="email" type="email" ref={register({required: true})} className="Contact-input" />
                      {errors.email && <span className="Contact-input-error">Email je povinný</span>}
                    </div>
                    <div className="Contact-inputWrapper">
                      <label>Telefon</label>
                      <input name="phone" ref={register} className="Contact-input Contact-input-tel" />
                    </div>
                  </div>
                  <div className="Contact-inputWrapper Contact-textAreaWrapper">
                    <label>Seznamte nás s vaším problémem</label>
                    <textarea name="problem" ref={register} className="Contact-textArea" rows={12} />
                  </div>
                  <div className="Contact-gdpr">
                    <input
                      type="checkbox"
                      name="gdprAgreement"
                      ref={register({required: true})}
                      className="Contaxt-gdprCheckbox"
                    />
                    <div className="Contaxt-gdprLabelWrapper">
                      <label className="Contaxt-gdprLabel">
                        Souhlasím, že dle evropské směrnice GDPR, veškeré mnou vložené údaje mohou být poskytovány
                        třetím stránám jen po mém souhlasu.*
                      </label>
                      {errors.gdprAgreement && <div className="Contact-input-error">Souhlas je povinný</div>}
                    </div>
                  </div>
                  <input type="submit" value="Odeslat" className="Contact-button" />
                </form>
              </>
            )}
          </Element>
        </div>
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
