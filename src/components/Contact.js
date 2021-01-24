import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

import map_200 from '../assets/map/map_vbd5mu_c_scale,w_200.webp'
import map_419 from '../assets/map/map_vbd5mu_c_scale,w_419.webp'
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
            <div className="Contact-companyName">ARBOVERT s.r.o.</div>
            <div>Lukáš Kačer</div>
            <div>Pasovská 84/37</div>
            <div>Vimperk, 38501</div>
            <div>IČO 2059690</div>
            <br />
            <div className="Contact-contacts">
              <div>
                <div className="Contact-mobile">
                  <PhoneLogo />
                  <a href="tel:+420739969933">+420 739 969 933</a>
                </div>
                <a href="mailto:info@arbovert.cz" target="_blank" rel="noopener noreferrer">
                  info@arbovert.cz
                </a>
              </div>
              <div className="Contact-socialMedia">
                <a href="https://www.facebook.com/arbovertcz" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="Contact-facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="Contact-map">
            <img
              sizes="(max-width: 419px) 100vw, 419px"
              srcset={`${map_200} 200w, ${map_419} 419w`}
              src={map_419}
              alt="map of czech republic"
            />
          </div>
        </div>
        <br />
        <div>Působíme v celých Čechách!</div>
        <div className="Contact-formWrapper Contact-maxWidth">
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
                      Souhlasím, že dle evropské směrnice GDPR, veškeré mnou vložené údaje mohou být poskytovány třetím
                      stránám jen po mém souhlasu.*
                    </label>
                    {errors.gdprAgreement && <div className="Contact-input-error">Souhlas je povinný</div>}
                  </div>
                </div>
                <input type="submit" value="Odeslat" className="Contact-button" />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
