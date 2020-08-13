import { React, PropTypes, Helmet } from '@/vendor'
import { Grid, Masthead, Text } from '@/components'

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
							<Masthead
								background={require('./contact.png')}
								foreground={<h2>Get In Touch</h2>}
							/>
						</Grid.Content>
					</Grid.Cell>
				</Grid>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							<Text>lorem ipsum...</Text>
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default ContactRoute
