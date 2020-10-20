import { React, Helmet } from '@/vendor'
import { Grid } from '@/components'

class IndexRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet titleTemplate="">
					<title>Lightwell Survey Wines :: Makin' Wine Straight Outta Virgina</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							homepage...
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default IndexRoute
