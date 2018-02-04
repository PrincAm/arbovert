import React from 'react'
import ReferencePhotos from './ReferencePhotos'
import {PHOTOS1, PHOTOS2} from '../utils/photoUtil'
import '../styles/Reference.css'

const Reference = () => (
  <div className="Reference">
    <div className="Reference-arbo">
      <ReferencePhotos photos={PHOTOS1} />
    </div>
    <div className="Reference-work">
      <ReferencePhotos photos={PHOTOS2} />
    </div>
  </div>
)

export default Reference
