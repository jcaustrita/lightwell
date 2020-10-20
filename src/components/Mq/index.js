import { React, PropTypes } from '@/vendor'

const Context = React.createContext()

class Provider extends React.PureComponent {

	static propTypes = {
		config: PropTypes.object.isRequired,
		children: PropTypes.node
	}

	state = {}

	constructor (props) {
		super(props)
		for (const [screen, mq] of Object.entries(props.config)) {
			const mql = window.matchMedia(mq)
			this.state[screen] = mql.matches
			mql.addListener((e) => {
				this.setState({
					[screen]: e.matches
				})
			})
		}
		this.setBodyClasses()
	}

	componentDidUpdate () {
		this.setBodyClasses()
	}

	setBodyClasses () {
		for(const [screen, enabled] of Object.entries(this.state)) {
			const className = `screen-${screen}`
			const method = (enabled) ? 'add' : 'remove'
			document.body.classList[method](className)
		}
	}

	render () {
		return (
			<Context.Provider value={this.state} children={this.props.children} />
		)
	}

}

class Mq extends React.PureComponent {

	static Provider = Provider
	static withMq = (Component) => (props) => (
		<Mq>
			{(mq) => (
				<Component mq={mq} {...props} />
			)}
		</Mq>
	)

	render () {
		return <Context.Consumer {...this.props} />
	}

}

export default Mq
