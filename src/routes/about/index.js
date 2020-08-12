import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class AboutRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>About</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							About....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default AboutRoute
