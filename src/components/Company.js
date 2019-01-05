import React from 'react'

import ContactUs from './ContactUs'

import dachshund_200 from '../assets/profil/dachshund_s0ekqe_c_scale,w_200.jpg'
import dachshund_394 from '../assets/profil/dachshund_s0ekqe_c_scale,w_394.jpg'
import dachshund_535 from '../assets/profil/dachshund_s0ekqe_c_scale,w_535.jpg'
import dachshund_655 from '../assets/profil/dachshund_s0ekqe_c_scale,w_655.jpg'
import dachshund_706 from '../assets/profil/dachshund_s0ekqe_c_scale,w_706.jpg'
import '../styles/Company.css'

const Service = () => {
  return (
    <div className="Company">
      <div className="Company-box">
        <h1>Arbovert</h1>
        <div>
          <picture style={{height: '300px'}}>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet={`
                ${dachshund_200} 200w,
                ${dachshund_394} 706w,
                ${dachshund_535} 1025w,
                ${dachshund_655} 1278w,
                ${dachshund_706} 1400w`}
              src={dachshund_535}
              alt="dachshund"
              style={{width: '300px', paddingRight: '20px', paddingTop: '10px', float: 'left'}}
            />
          </picture>
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
