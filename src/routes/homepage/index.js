import { React, PropTypes, Helmet, Link } from '@/vendor'
import { Mq, Grid, Fs, Img, Gallery, ShopCarousel } from '@/components'
import styles from './styles.module.scss'

class LinkCell extends React.PureComponent {
	static propTypes = {
		pre: PropTypes.node,
		primary: PropTypes.string
	}
	render () {
		const { pre, primary, ...props } = this.props
		return (
			<Grid.Content pad={1} className={styles.linkCell} tag={Link} {...props}>
				<Fs align="center">
					{pre}
					<Fs tag="h2" variant="h2">{primary}</Fs>
				</Fs>
			</Grid.Content>
		)
	}
}

class IndexRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet titleTemplate="">
					<title>Lightwell Survey Wines :: Makin' Wine Straight Outta Virgina</title>
				</Helmet>
				<Mq>
					{(Mq) => (
						<Grid stacked>
							<Grid.Cell>
								<Grid stacked={!Mq.large}>
									<Grid.Cell>
										<Grid stacked>
											<Grid.Cell>
												<Grid.Content className={styles.shopCarouselWrapper}>
													<ShopCarousel>
														<ShopCarousel.Slide
															image={require('./currentReleases/2018-hintermen@2x.jpg')}
															title="2018 Hintermen"
														/>
														<ShopCarousel.Slide
															image={require('./currentReleases/2018-horses@2x.jpg')}
															title="2018 Goodbye Horses"
														/>
														<ShopCarousel.Slide
															image={require('./currentReleases/2018-idiots@2x.jpg')}
															title="2018 Los Idiots"
														/>
														<ShopCarousel.Slide
															image={require('./currentReleases/2018-wolves@2x.jpg')}
															title="2018 The Weird Ones Are Wolves"
														/>
														<ShopCarousel.Slide
															image={require('./currentReleases/2019-strange-days@2x.jpg')}
															title="2019 Strange Days"
														/>
													</ShopCarousel>
												</Grid.Content>
											</Grid.Cell>
											<Grid.Cell flex={0}>
												<Grid.Content light>
													<Fs align="center">
														🍷 FREE Ground Shipping 🚚
													</Fs>
												</Grid.Content>
											</Grid.Cell>
										</Grid>
									</Grid.Cell>
									<Grid.Cell>
										<Grid stacked>
											<Grid.Cell>
												<Grid.Content pad={1} light className={styles.quote}>
													<Fs align="center">
														“Lightwell Survey Wines produces small batches of lively reds, dense whites and unique combinations of the two.”
													</Fs>
													<Img src={require('./signature-sebastian@2x.png')} className={styles.signed} />
													<Img src={require('./little-larry@2x.png')} className={styles.larry} />
												</Grid.Content>
											</Grid.Cell>
											<Grid.Cell flex={2}>
												<Grid stacked={Mq.small}>
													<Grid.Cell>
														<Grid stacked>
															<Grid.Cell>
																<LinkCell
																	to="/notes/2020-hellawine-release-party"
																	pre={<Img src={require('./note@2x.png')} />}
																	primary="Hellawine Release Party"
																	light
																/>
															</Grid.Cell>
															<Grid.Cell>
																<LinkCell
																	to="/about"
																	pre="Winemaking"
																	primary="Our Story"
																/>
															</Grid.Cell>
														</Grid>
													</Grid.Cell>
													<Grid.Cell>
														<Grid.Content bg={require('./pic1@2x.jpg')} />
													</Grid.Cell>
												</Grid>
											</Grid.Cell>
										</Grid>
									</Grid.Cell>
								</Grid>
							</Grid.Cell>
							<Grid.Cell>
								<Grid stacked={!Mq.large}>
									<Grid.Cell>
										<Grid stacked>
											<Grid.Cell>
												<LinkCell
													to="/visit"
													pre="Tasting Room"
													primary="Book a Tasting"
												/>
											</Grid.Cell>
											{Mq.large && (
												<Grid.Cell flex={2}>
													<Grid.Content bg={require('./pic2@2x.jpg')} />
												</Grid.Cell>
											)}
										</Grid>
									</Grid.Cell>
									<Grid.Cell flex={2}>
										<Gallery />
									</Grid.Cell>
									<Grid.Cell>
										<Grid stacked>
											<Grid.Cell>
												<LinkCell
													to="/shop"
													pre="Our Cellar"
													primary="Buy Wine"
													light
												/>
											</Grid.Cell>
											<Grid.Cell flex={2}>
												<Grid.Content pad={2}>
													<Img src={require('./W@2x.png')} />
												</Grid.Content>
											</Grid.Cell>
										</Grid>
									</Grid.Cell>
								</Grid>
							</Grid.Cell>
						</Grid>
					)}
				</Mq>
			</>
		)

	}

}

export default IndexRoute
