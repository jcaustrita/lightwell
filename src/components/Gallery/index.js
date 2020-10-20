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
		className: PropTypes.string,
		children: PropTypes.node
	}

	static Slide = Slide

	render () {
		const className = Classnames(styles.gallery, this.props.className)
		return (
			<div className={className}>
				<TinySlider
					options={{ controls: false, navPosition: 'bottom' }}
					children={this.props.children}
				/>
			</div>
		)
	}

}

export default Gallery
