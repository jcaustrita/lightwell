import { React, Helmet } from '@/vendor'
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
							background={{
								image: require('./shop.png'),
								title: 'Shop'
							}}
							foreground={
								<Masthead.Foreground.Default
									headline="Free Ground Shipping"
									callout={{
										image: require('./note@2x.png'),
										text: '6 bottle minimum. Shipping may be delayed due to summer heat waves.'
									}}
								/>
							}
						/>
					}
					body={
						<Grid>
							<Grid.Cell>
								<VinoFrame />
							</Grid.Cell>
						</Grid>

					}
				/>
			</>
		)

	}

}

export default ShopRoute
