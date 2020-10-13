import { React } from '@/vendor'

class VinoFrame extends React.PureComponent {

	componentDidMount () {
		const { vsWineList } = window
		if(vsWineList?.initialized()) {
			vsWineList.init("vs-winelist", 1)
		}
	}

	render () {
		return (
			<div id="vs-winelist" style={{width: '100%'}}></div>
		)
	}
}

export default VinoFrame
