import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class IndexRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Homepage</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content vhFill={true}>
							this will fill to bottom of viewport
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default IndexRoute
