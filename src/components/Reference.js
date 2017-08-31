import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import {PHOTOS} from '../utils/photoUtil'

class Reference extends React.Component {
	constructor(){
		super()
		this.state = {currentImage: 0, lightboxIsOpen: false}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
	}

	openLightbox(index, event){
		event.preventDefault()
		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		})
	}

	closeLightbox(){
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	}

	gotoPrevious(){
		this.setState({
			currentImage: this.state.currentImage - 1
		})
	}

	gotoNext(){
		this.setState({
			currentImage: this.state.currentImage + 1
		})
	}

	render () {
		return(
			<div className="Reference">
				<Gallery photos={PHOTOS} cols={6} onClickPhoto={this.openLightbox} />
				<Lightbox
					theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
					images={PHOTOS}
					backdropClosesModal={true}
					onClose={this.closeLightbox}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					currentImage={this.state.currentImage}
					isOpen={this.state.lightboxIsOpen}
					width={1600}
				/>
			</div>
		)
	}
}

export default Reference