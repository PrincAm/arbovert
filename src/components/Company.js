import React from 'react'

import ContactUs from './ContactUs'

import chainaxe_200 from '../assets/profil/chainaxe_pnop4v_c_scale,w_200.jpg'
import chainaxe_347 from '../assets/profil/chainaxe_pnop4v_c_scale,w_347.jpg'
import chainaxe_454 from '../assets/profil/chainaxe_pnop4v_c_scale,w_454.jpg'
import chainaxe_546 from '../assets/profil/chainaxe_pnop4v_c_scale,w_546.jpg'
import chainaxe_627 from '../assets/profil/chainaxe_pnop4v_c_scale,w_627.jpg'
import chainaxe_698 from '../assets/profil/chainaxe_pnop4v_c_scale,w_698.jpg'
import chainaxe_771 from '../assets/profil/chainaxe_pnop4v_c_scale,w_771.jpg'
import '../styles/Company.css'

const Service = () => {
  return (
    <div className="Company">
      <div className="Company-box">
        <h1>Arbovert</h1>
        <div>
          <picture className="Contact-picture">
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`
                ${chainaxe_200} 200w,
                ${chainaxe_347} 347w,
                ${chainaxe_454} 454w,
                ${chainaxe_546} 546w,
                ${chainaxe_627} 627w,
                ${chainaxe_698} 698w,
                ${chainaxe_771} 771w`}
              src={chainaxe_546}
              alt="dachshund"
            />
          </picture>
          Náš Arbovert se již od roku 2013 zabývá arboristikou, kompletní péčí o dřeviny a výškovými pracemi všeho
          druhu. Pokud Vás tíží nebezpečně přerostlé stromy, opadávající omítka, dotěrní holubi nebo strom trefený
          bleskem, zavolejte a my s vámi váš problém rádi probereme. Klidně se na nás obraťte, i když se jedná o
          havarijní situace v nepopulární čas. Snad ani nemusíme zmiňovat, že nezávazné nacenění práce je samozřejmostí.
          Zakládáme si na odbornosti našich lidí a naším cílem je se zdokonalovat a zlepšovat v pracích, u kterých
          ostatní tápají.
        </div>
        <ContactUs />
      </div>
    </div>
  )
}

export default Service
