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
										<Fs variant="h2" tag="h2">Monthly Tastings</Fs>
										<p>Join us in Waynesboro, VA (the Old Mill) for a look into our signature approach to both winemaking and frienship. We're currently doing wine tastings once a month with parties no larger than 6 people, this includes non-tasters. Dogs are welcome. If you have any questions, please reach out to us at <a href="mailto:wines@lightwellsurvey.com">wines@lightwellsurvey.com</a> or contact <a href="mailto:cece@lightwellsurvey.com">Cece</a> directly.</p>
										<p>
											<a href="https://g.page/lightwellsurvey?share" target="_blank">200 W. 12TH ST, UNIT# D53<br />
											Waynesboro, VA. 22980<br />
											</a>
										</p>
										<p>
											<a href="https://square.site/book/LQFV0SYD1EBKS/lightwell-survey-wines-waynesboro-va">Book a Tasting</a>
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
