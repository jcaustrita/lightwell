import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'

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
							Shop....
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default ShopRoute
