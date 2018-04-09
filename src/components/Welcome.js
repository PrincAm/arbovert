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
      <span><span className="Welcome-hashTag">#</span>stromy </span>
      <span><span className="Welcome-hashTag">#</span>výškové práce </span>
      <span><span className="Welcome-hashTag">#</span>nadšení</span>
    </div>
    <div className="Welcome-message">
      Náš Arbovert se již od roku 2013 zabývá arboristikou, kompletní péčí o dřeviny a výškovými pracemi všeho druhu.
      Pokud Vás tíží nebezpečně přerostlé stromy, opadávající omýtka, dotěrní holubi nebo strom trefený bleskem,
      zavolejte a my s vámi váš problém rádi probereme. Klidně se na nás obraťte, ikdyž se jedná o havarijní situace v
      nepopulární čas. Snad ani nemusíme zmiňovat, že nezávazné nacenění práce je samozřejmostí. Zakládáme si na
      odbornosti našich lidí a našim cílem je se zdokonalovat a zlepšovat v pracích, u kterých ostatní tápají.
    </div>
  </div>
</div>

export default Welcome