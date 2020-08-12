import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class VisitRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Visit</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							Visit....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default VisitRoute
