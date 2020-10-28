import { React, PropTypes, Classnames } from '@/vendor'
import TinySlider from '../TinySlider'
import styles from './styles.module.scss'

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

	static Slide = Slide

	render () {
		const { className, ...props } = this.props
		return (
			<TinySlider
				className={Classnames(
					styles.gallery,
					className
				)}
				{...props}
			/>
		)
	}

}

export default Gallery
