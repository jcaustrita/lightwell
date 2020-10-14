import { React } from '@/vendor'

class VinoFrame extends React.PureComponent {

	componentDidMount () {
		const { vsWineList } = window
		vsWineList.init(this.$el.id, true)
	}

	render () {
		return (
			<div id="winelist" style={{width: '100%'}} ref={(el) => { this.$el = el }} />
		)
	}
}

export default VinoFrame
