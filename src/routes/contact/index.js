import { React, PropTypes, Helmet, Link } from '@/vendor'
import { Mq, Grid, Masthead, Text } from '@/components'

class ContactRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Contact</title>
				</Helmet>
				<Mq>
					{(Mq) => (
						<Grid vhFill={Mq.large}>
							<Grid.Cell>
								<Grid grow={false}>
									<Grid.Cell>
										<Grid.Content>
											<Masthead
												background={require('./contact.png')}
												foreground={<h2>Get In Touch</h2>}
											/>
										</Grid.Content>
									</Grid.Cell>
								</Grid>
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
							</Grid.Cell>
						</Grid>
					)}
				</Mq>
			</>
		)

	}

}

export default ContactRoute
