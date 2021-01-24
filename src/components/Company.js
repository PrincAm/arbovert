import React from 'react'

import chainaxe_200 from '../assets/profil/chainaxe_pnop4v_c_scale,w_200.webp'
import chainaxe_347 from '../assets/profil/chainaxe_pnop4v_c_scale,w_347.webp'
import '../styles/Company.css'

const Service = () => {
  return (
    <div className="Company">
      <div className="Company-box">
        <h1>Arbovert</h1>
        <div>
          <picture className="Contact-picture">
            <img
              sizes="(max-width: 347px) 100vw, 347px"
              srcSet={`
                ${chainaxe_200} 200w,
                ${chainaxe_347} 347w`}
              src={chainaxe_347}
              alt="chain axe"
            />
          </picture>
          Náš Arbovert se již od roku 2013 zabývá arboristikou, kompletní péčí o dřeviny a výškovými pracemi všeho
          druhu. Pokud Vás tíží nebezpečně přerostlé stromy, opadávající omítka, dotěrní holubi nebo strom trefený
          bleskem, zavolejte a my s vámi váš problém rádi probereme. Klidně se na nás obraťte, i když se jedná o
          havarijní situace v nepopulární čas. Snad ani nemusíme zmiňovat, že nezávazné nacenění práce je samozřejmostí.
          Zakládáme si na odbornosti našich lidí a naším cílem je se zdokonalovat a zlepšovat v pracích, u kterých
          ostatní tápají.
        </div>
      </div>
    </div>
  )
}

export default Service
