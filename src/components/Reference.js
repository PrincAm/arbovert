import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import {PHOTOS} from '../utils/photoUtil'

class Reference extends React.Component {

	state = {
		currentImage: 0,
		lightboxIsOpen: false
	}

	openLightbox = (_, obj) => {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
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

	render () {
		const {currentImage, lightboxIsOpen} = this.state
		return(
			<div className="Reference">
				<Gallery photos={PHOTOS} cols={6} onClick={this.openLightbox} />
				<Lightbox
					theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
					images={PHOTOS}
					backdropClosesModal={true}
					onClose={this.closeLightbox}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					currentImage={currentImage}
					isOpen={lightboxIsOpen}
					width={1600}
				/>
			</div>
		)
	}
}

export default Reference