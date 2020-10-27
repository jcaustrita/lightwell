import { React, PropTypes } from '@/vendor'
import { Grid } from '@/components'

class MastheadSubpage extends React.PureComponent {

	static propTypes = {
		masthead: PropTypes.element,
		body: PropTypes.node
	}

	render () {

		return (
			<>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							{this.props.masthead}
						</Grid.Content>
					</Grid.Cell>
				</Grid>
				{this.props.body}
			</>
		)

	}

}

export default MastheadSubpage
