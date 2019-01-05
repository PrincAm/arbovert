import React from 'react'
import ReferencePhotos from './ReferencePhotos'
import {PHOTOS1} from '../utils/photoUtil'
import '../styles/Reference.css'

const Reference = () => (
  <div className="Reference">
    <ReferencePhotos photos={PHOTOS1} />
  </div>
)

export default Reference
