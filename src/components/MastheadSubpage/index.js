import { React, PropTypes } from '@/vendor'
import { Mq, Grid } from '@/components'

class MastheadSubpage extends React.PureComponent {

	static propTypes = {
		masthead: PropTypes.element,
		body: PropTypes.node
	}

	render () {

		return (
			<Mq>
				{(Mq) => (
					<Grid vhFill={Mq.large}>
						<Grid.Cell>
							<Grid grow={false}>
								<Grid.Cell>
									<Grid.Content>
										{this.props.masthead}
									</Grid.Content>
								</Grid.Cell>
							</Grid>
							{this.props.body}
						</Grid.Cell>
					</Grid>
				)}
			</Mq>
		)

	}

}

export default MastheadSubpage
