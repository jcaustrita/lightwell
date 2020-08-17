import { React, PropTypes, Helmet } from '@/vendor'
import { Mq, Grid, Text, Gallery } from '@/components'

class VisitRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Visit</title>
				</Helmet>
				<Mq>
					{(Mq) => (
						<Grid vhFill={!Mq.small} stacked={Mq.small}>
							<Grid.Cell>
								<Grid.Content pad={1}>
									<Text center={true}>
										<h2>Schedule a Tasting</h2>
										<p>Join us in Waynesboro, VA (the Old Mill) for a look into our signature approach to both winemaking and frienship.</p>
										<p>For all requests, please schedule your tasting by calling 123-456-7890. We are currently taking groups up to 6, this includes non-tasters.</p>
										<p>
											200 W. 12TH ST, UNIT# D53<br />
											Waynesboro, VA. 22980
										</p>
										<p>
											<a href="mailto:wines@lightwellsurvey.com">wines@lightwellsurvey.com</a>
										</p>
									</Text>
								</Grid.Content>
							</Grid.Cell>
							<Grid.Cell>
								<Gallery>
									<Gallery.Slide src={require('./img/tmp.jpg')} />
									<Gallery.Slide src={require('./img/tmp.jpg')} />
									<Gallery.Slide src={require('./img/tmp.jpg')} />
								</Gallery>
							</Grid.Cell>
						</Grid>
					)}
				</Mq>
			</>
		)

	}

}

export default VisitRoute
