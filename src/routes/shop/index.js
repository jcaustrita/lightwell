import { React, PropTypes, Helmet } from '@/vendor'
import { Grid, MastheadSubpage, Masthead, VinoFrame } from '@/components'

class ShopRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Shop</title>
				</Helmet>
				<MastheadSubpage
					masthead={
						<Masthead
							background={require('./shop.png')}
							foreground={<h2>Free Ground Shipping</h2>}
						/>
					}
					body={
						<Grid>
							<Grid.Cell>
								<Grid.Content pad={2}>
									<VinoFrame />
								</Grid.Content>
							</Grid.Cell>
						</Grid>

					}
				/>
			</>
		)

	}

}

export default ShopRoute
