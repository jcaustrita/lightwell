import { React, PropTypes } from '@/vendor'
import { calcElementTextShadow } from './internals'

class Headlight extends React.PureComponent {

	static propTypes = {
		text: PropTypes.string.isRequired
	}

	state = {
		shadow: undefined
	}

	$pending = true
	$mouse = {
		x: 0,
		y: 0
	}

	componentDidMount () {
		document.addEventListener('mousemove', this.trackMouse)
		this.$rAF = this.evaluateShadow()
	}

	componentWillUnmount () {
		document.removeEventListener('mousemove', this.trackMouse)
		window.cancelAnimationFrame(this.$rAF)
	}

	trackMouse = (event) => {
		this.$mouse = {
			x: event.pageX,
			y: event.pageY
		}
		this.$pending = true
	}

	evaluateShadow = () => {
		window.requestAnimationFrame(() => {
			if(this.$pending) {
				const { x, y } = this.$mouse
				this.setState({
					shadow: calcElementTextShadow(this.$el, x, y)
				})
				this.$pending = false
			}
			this.evaluateShadow()
		})
	}

	render () {
		const { text, ...props } = this.props
		return (
			<h1
				{...props}
				ref={(el) => {
					this.$el = el
				}}
				children={text}
				style={{
					textShadow: this.state.shadow
				}}
			/>
		)
	}

}

export default Headlight
