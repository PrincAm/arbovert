import React from 'react'

import ContactUs from './ContactUs'
import '../styles/Company.css'

const Service = () => {
  return (
    <div className="Company">
      <div className="Company-box">
        <h1>Arbovert</h1>
        <div>
          Náš Arbovert se již od roku 2013 zabývá arboristikou, kompletní péčí o dřeviny a výškovými pracemi všeho
          druhu. Pokud Vás tíží nebezpečně přerostlé stromy, opadávající omýtka, dotěrní holubi nebo strom trefený
          bleskem, zavolejte a my s vámi váš problém rádi probereme. Klidně se na nás obraťte, ikdyž se jedná o
          havarijní situace v nepopulární čas. Snad ani nemusíme zmiňovat, že nezávazné nacenění práce je samozřejmostí.
          Zakládáme si na odbornosti našich lidí a našim cílem je se zdokonalovat a zlepšovat v pracích, u kterých
          ostatní tápají.
        </div>
        <ContactUs />
      </div>
    </div>
  )
}

export default Service
