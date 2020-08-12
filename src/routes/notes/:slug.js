import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class NotesSlugRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Notes Slug</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							Notes Slug....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default NotesSlugRoute
