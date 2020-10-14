import { React, PropTypes, Helmet, Link } from '@/vendor'
import { Mq, Grid, MastheadSubpage, Masthead, Text } from '@/components'

class ContactRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Contact</title>
				</Helmet>
				<MastheadSubpage
					masthead={
						<Masthead
							background={{
								image: require('./contact.png'),
								title: 'Contact'
							}}
							foreground={
								<Masthead.Foreground.Default
									headline="Get In Touch"
								/>
							}
						/>
					}
					body={
						<Mq>
							{(Mq) => (
								<Grid stacked={!Mq.large}>
									<Grid.Cell>
										<Grid.Content pad={2}>
											<Text center={true}>
												<h2>Where to Buy</h2>
												<p>
													Please contact:<br />
													Williams Corner<br />
													434.293.6082
												</p>
											</Text>
										</Grid.Content>
									</Grid.Cell>
									<Grid.Cell>
										<Grid.Content pad={2}>
											<Text center={true}>
												<h2>Where to Buy</h2>
												<p>
													200 W. 12TH ST, UNIT# D53<br />
													Waynesboro, VA. 22980<br />
													<a href="mailto:wines@lightwellsurvey.com">wines@lightwellsurvey.com</a>
												</p>
											</Text>
										</Grid.Content>
									</Grid.Cell>
									<Grid.Cell>
										<Grid.Content pad={2}>
											<Text center={true}>
												<h2>Support</h2>
												<p>
													Questions about your order?<br />
													<a href="#">Shipping + Returns</a><br />
													<Link to="/legal">Legal</Link>
												</p>
											</Text>
										</Grid.Content>
									</Grid.Cell>
								</Grid>
							)}
						</Mq>
					}
				/>
			</>
		)

	}

}

export default ContactRoute
