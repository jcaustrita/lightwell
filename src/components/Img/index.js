import { React, PropTypes } from '@/vendor'

class Img extends React.PureComponent {

	static propTypes = {
		src: PropTypes.string
	}

	state = {
		ready: false,
		width: undefined,
		height: undefined
	}

	constructor (props) {
		super(props)
		const faux = new Image()
		faux.onload = () => {
			const { naturalWidth, naturalHeight } = faux
			this.setState({
				ready: true,
				width: Math.round(naturalWidth / 2),
				height: Math.round(naturalHeight / 2)
			})
		}
		faux.src = props.src
	}

	render () {
		if(this.state.ready) {
			const { src, ...props } = this.props
			return (
				<img
					{...props}
					src={src}
					width={this.state.width}
					height={this.state.height}
				/>
			)
		}
		return null
	}

}

export default Img
