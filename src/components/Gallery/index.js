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
			<TinySlider
				className={Classnames(
					styles.gallery,
					className
				)}
				children={
					Object.values(images).map((src) => (
						<Slide src={src} key={src} />
					))
				}
				{...props}
			/>
		)
	}

}

export default Gallery
