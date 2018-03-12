import React from 'react'
import {Desktop} from './App'
import '../styles/Welcome.css'

const Welcome = () =>
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
  <div className="Welcome-content">
    <div className="Welcome-question">
      <h1>Proč my?</h1>
    </div>
    <div className="Welcome-slogan">
      <span><span className="Welcome-hashTag">#</span>individualni pristup </span>
      <span><span className="Welcome-hashTag">#</span>kvalitni materialy </span>
      <span><span className="Welcome-hashTag">#</span>flexibilita</span>
    </div>
    <div style={{textAlign: "center", fontSize: "0.8em", paddingTop: '20px'}}>
      Jsme firma, která ke každému zákazníkovi přístupuje  a jsme velice flexibilní i v havarijních situacích. Používáme ty
      nejkvalitnější materiály které máme roky ověřeny od našich dodavatelů. Profesionalita a odbornost našich lidí
      je to, na čem zakládáme a našim cílem je se zdokonalovat a zlepšovat v ostatních pracích, u kterých ostatní tápají.
      Používáme ty nejkvalitnější materiály které máme roky ověřeny od našich dodavatelů.
    </div>
  </div>
</div>

export default Welcome