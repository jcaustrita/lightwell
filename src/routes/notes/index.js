import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class NotesRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Notes</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							Notes....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default NotesRoute
