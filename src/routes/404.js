import { React, Helmet } from '@/vendor'
import { Grid, Fs } from '@/components'

class PageNotFoundRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<meta name="prerender-status-code" content="404" />
				</Helmet>
				<Grid stacked>
					<Grid.Cell>
						<Grid.Content pad={2}>
							<Fs variant="h2" tag="h2">Page Not Found</Fs>
							<br />
							<img src="https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif" />
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default PageNotFoundRoute
