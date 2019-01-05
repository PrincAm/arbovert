import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

class ReferencePhotos extends Component {
  state = {
    currentImage: 0,
    lightboxIsOpen: false
  }

  openLightbox = (_, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  render() {
    const {photos} = this.props
    const {currentImage, lightboxIsOpen} = this.state
    return (
      <div>
        /* 320px width of iPhone 5/SE screen */
        <Gallery photos={photos} columns={window.innerWidth > 320 ? 5 : 4} onClick={this.openLightbox} />
        <Lightbox
          theme={{container: {background: 'rgba(0, 0, 0, 0.85)'}}}
          images={photos}
          backdropClosesModal={true}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={lightboxIsOpen}
          width={800}
        />
      </div>
    )
  }
}

export default ReferencePhotos

ReferencePhotos.propTypes = {
  photos: PropTypes.array.isRequired
}
