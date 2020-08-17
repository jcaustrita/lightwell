import { React, PropTypes } from '@/vendor'
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
		children: PropTypes.node
	}

	static Slide = Slide

	render () {
		return (
			<div className={styles.gallery}>
				<TinySlider
					options={{ controls: false, navPosition: 'bottom' }}
					children={this.props.children}
				/>
			</div>
		)
	}

}

export default Gallery
