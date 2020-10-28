import { React, PropTypes, Classnames } from '@/vendor'
import { tns } from 'tiny-slider/src/tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'
import styles from './styles.module.scss'

class TinySlider extends React.PureComponent {

	static defaultProps = {
		options: {}
	}

	static propTypes = {
		options: PropTypes.object,
		children: PropTypes.node,
		className: PropTypes.string
	}

	static Slide = ({ className, ...props }) => {
		return (
			<li className={Classnames(className, styles.slide)} {...props} />
		)
	}

	componentDidMount () {
		this.initSlider()
	}

	initSlider = () => {
		this.$slider = tns({
			container: this.$el,
			mouseDrag: true,
			speed: 500,
			controls: false,
			navPosition: 'bottom',
			autoplay: true,
			autoplayHoverPause: false,
			autoplayTimeout: 3500,
			autoplayButtonOutput: false,
			...this.props.options
		})
	}

	render () {
		const className = Classnames(styles.sliderWrapper, this.props.className)
		return (
			<div className={className}>
				<ul
					className={styles.slider}
					ref={(el) => {
						this.$el = el
					}}
					children={this.props.children}
				/>
			</div>
		)
	}

}

export default TinySlider
