import { React, Helmet } from '@/vendor'
import { Mq, Grid, Gallery, Fs } from '@/components'

class VisitRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Visit</title>
				</Helmet>
				<Mq>
					{(Mq) => (
						<Grid stacked={!Mq.large}>
							<Grid.Cell>
								<Grid.Content pad={2}>
									<Fs align="center" contained>
										<Fs variant="h2" tag="h2">Visit Our Tasting Room</Fs>
										<p>Join us in Waynesboro, VA (the Old Mill) for a look into our signature approach to both winemaking and frienship. We're currently doing wine tastings once a month with parties no larger than 6 people, this includes non-tasters. Dogs are welcome. If you have any questions, please reach out to us at <a href="mailto:wines@lightwellsurvey.com">wines@lightwellsurvey.com</a></p>
										<p>
											200 W. 12TH ST, UNIT# D53<br />
											Waynesboro, VA. 22980
										</p>
										<p>
											<a href="https://square.site/book/LQFV0SYD1EBKS/lightwell-survey-wines-waynesboro-va">Book an Appointment</a>
										</p>
									</Fs>
								</Grid.Content>
							</Grid.Cell>
							<Grid.Cell>
								<Gallery />
							</Grid.Cell>
						</Grid>
					)}
				</Mq>
			</>
		)

	}

}

export default VisitRoute
