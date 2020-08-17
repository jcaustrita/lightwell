import { React, PropTypes, Classnames } from '@/vendor'
import { tns } from "tiny-slider/src/tiny-slider"
import 'tiny-slider/dist/tiny-slider.css'
import styles from './styles.module.scss'

class TinySlider extends React.PureComponent {

	static defaultProps = {
		options: {}
	}

	static propTypes = {
		options: PropTypes.object,
		children: PropTypes.node
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
			...this.props.options
		})
	}

	render () {
		return (
			<ul
				className={styles.slider}
				ref={(el) => {
					this.$el = el
				}}
				children={this.props.children}
			/>
		)
	}

}

export default TinySlider
