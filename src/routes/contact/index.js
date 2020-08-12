import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class ContactRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Contact</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							Contact....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default ContactRoute
