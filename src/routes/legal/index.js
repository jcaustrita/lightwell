import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

class LegalRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Legal</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							Legal....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default LegalRoute
