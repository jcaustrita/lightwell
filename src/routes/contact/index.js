import { React, PropTypes, Helmet, Link } from '@/vendor'
import { Mq, Grid, MastheadSubpage, Masthead, Fs } from '@/components'

class Cell extends React.PureComponent {
	static propTypes = {
		title: PropTypes.string,
		body: PropTypes.node
	}
	render () {
		return (
			<Grid.Cell>
				<Grid.Content pad={2}>
					<Fs align="center" contained>
						<Fs variant="h3" tag="h2">{this.props.title}</Fs>
						{this.props.body}
					</Fs>
				</Grid.Content>
			</Grid.Cell>
		)
	}
}

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
									<Cell
										title="Distribution"
										body={(
											<p>
												Williams Corner<br />
												<a href="https://www.williamscorner.com/merchants" target="_blank">Find Lightwell Survey Wines</a><br />
												or Call 434.293.6082
											</p>
										)}
									/>
									<Cell
										title="Tasting Room"
										body={(
											<p>
												200 W. 12TH ST, UNIT# D53<br />
												Waynesboro, VA. 22980<br />
												<a href="https://g.page/lightwellsurvey?share" target="_blank">Get Directions</a>
											</p>
										)}
									/>
									<Cell
										title="Support"
										body={(
											<p>
												<a href="mailto:wines@lightwellsurvey.com">General Questions + Comments</a><br />
												<a href="mailto:cece@lightwellsurvey.com">Tasting Room Inquiries</a><br />
												<Link to="/legal">Shipping + Returns</Link>
											</p>
										)}
									/>
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
