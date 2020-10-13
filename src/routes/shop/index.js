import { React, PropTypes, Helmet } from '@/vendor'
import { Grid, VinoFrame } from '@/components'

class ShopRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Shop</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content>
							<VinoFrame />
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default ShopRoute
