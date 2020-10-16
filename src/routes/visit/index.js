import { React, PropTypes, Helmet } from '@/vendor'
import { Mq, Grid, Gallery, Fs } from '@/components'
import * as gallery from './gallery/*.jpg'

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
									<Fs align="center">
										<Fs variant="h2" tag="h2">Schedule a Tasting</Fs>
										<p>Join us in Waynesboro, VA (the Old Mill) for a look into our signature approach to both winemaking and frienship.</p>
										<p>For all requests, please schedule your tasting by calling 123-456-7890. We are currently taking groups up to 6, this includes non-tasters.</p>
										<p>
											200 W. 12TH ST, UNIT# D53<br />
											Waynesboro, VA. 22980
										</p>
										<p>
											<a href="mailto:wines@lightwellsurvey.com">wines@lightwellsurvey.com</a>
										</p>
									</Fs>
								</Grid.Content>
							</Grid.Cell>
							<Grid.Cell>
								<Gallery>
									{Object.values(gallery).map((src) => (
										<Gallery.Slide src={src} key={src} />
									))}
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
