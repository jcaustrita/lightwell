import { React, Helmet } from '@/vendor'
import { Mq, Grid } from '@/components'

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
												<Grid.Content>
													[Shop rotator]
												</Grid.Content>
											</Grid.Cell>
											<Grid.Cell flex={0}>
												<Grid.Content>
													[Free ground shipping]
												</Grid.Content>
											</Grid.Cell>
										</Grid>
									</Grid.Cell>
									<Grid.Cell>
										<Grid stacked>
											<Grid.Cell flex={0}>
												<Grid.Content pad={1}>
													[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.]
												</Grid.Content>
											</Grid.Cell>
											<Grid.Cell>
												<Grid stacked={Mq.small}>
													<Grid.Cell>
														<Grid stacked>
															<Grid.Cell>
																<Grid.Content pad={1}>
																	[Notes Article]
																</Grid.Content>
															</Grid.Cell>
															<Grid.Cell>
																<Grid.Content pad={1}>
																	[Our Story]
																</Grid.Content>
															</Grid.Cell>
														</Grid>
													</Grid.Cell>
													<Grid.Cell>
														<Grid.Content>
															[Picture]
														</Grid.Content>
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
												<Grid.Content pad={1}>
													[Tasting Room]
												</Grid.Content>
											</Grid.Cell>
											<Grid.Cell>
												<Grid.Content>
													[Picture]
												</Grid.Content>
											</Grid.Cell>
										</Grid>
									</Grid.Cell>
									<Grid.Cell>
										<Grid.Content>
											[Picture]
										</Grid.Content>
									</Grid.Cell>
									<Grid.Cell>
										<Grid stacked>
											<Grid.Cell>
												<Grid.Content pad={1}>
													[Buy Wine]
												</Grid.Content>
											</Grid.Cell>
											<Grid.Cell>
												<Grid.Content>
													[W]
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
