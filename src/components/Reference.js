import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import {PHOTOS1, PHOTOS2} from '../utils/photoUtil'

class Reference extends React.Component {

	state = {
		currentImage: 0,
		lightboxIsOpen: false
	}

  openLightbox1 = (_, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox1 = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious1 = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext1 = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  openLightbox2 = (_, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox2 = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious2 = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext2 = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  render () {
		const {currentImage, lightboxIsOpen} = this.state
		return(
			<div className="Reference">
        <div className="Reference-arbo">
          <Gallery photos={PHOTOS1} cols={6} onClick={this.openLightbox1} />
          <Lightbox
            theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
            images={PHOTOS1}
            backdropClosesModal={true}
            onClose={this.closeLightbox1}
            onClickPrev={this.gotoPrevious1}
            onClickNext={this.gotoNext1}
            currentImage={currentImage}
            isOpen={lightboxIsOpen}
            width={800}
          />
        </div>
        <div className="Reference-work">
          <Gallery photos={PHOTOS2} cols={6} onClick={this.openLightbox2} />
          <Lightbox
            theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
            images={PHOTOS2}
            backdropClosesModal={true}
            onClose={this.closeLightbox2}
            onClickPrev={this.gotoPrevious2}
            onClickNext={this.gotoNext2}
            currentImage={currentImage}
            isOpen={lightboxIsOpen}
            width={800}
          />
        </div>
			</div>
		)
	}
}

export default Reference