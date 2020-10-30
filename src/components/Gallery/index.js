import { React, PropTypes, Classnames } from '@/vendor'
import TinySlider from '../TinySlider'
import styles from './styles.module.scss'
import * as images from './images/*.jpg'

class Slide extends React.PureComponent {

	static propTypes = {
		src: PropTypes.string.isRequired
	}

	render () {
		return (
			<TinySlider.Slide
				className={styles.image}
				style={{
					backgroundImage: `url(${this.props.src})`
				}}
			/>
		)
	}

}

class Gallery extends React.PureComponent {

	static propTypes = {
		className: PropTypes.string
	}

	render () {
		const { className, ...props } = this.props
		return (
			<TinySlider className={Classnames(styles.gallery, className)} {...props}>
				<Slide src={require('./images/tasting.jpg')} />
				<Slide src={require('./images/tasting-room.jpg')} />
				<Slide src={require('./images/hellawine.jpg')} />
				<Slide src={require('./images/happy-couple.jpg')} />
				<Slide src={require('./images/og-bottles.jpg')} />
				<Slide src={require('./images/tasting-bar.jpg')} />
				<Slide src={require('./images/tasting-chatter.jpg')} />
				<Slide src={require('./images/pinko.jpg')} />
			</TinySlider>
		)
	}

}

export default Gallery
