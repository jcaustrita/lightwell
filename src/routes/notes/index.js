import { React, PropTypes, Helmet } from '@/vendor'
import { Grid, MastheadSubpage, Masthead } from '@/components'
import StuffWeWrote from './StuffWeWrote'
import styles from './styles.module.scss'

class NotesRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Notes</title>
				</Helmet>
				<MastheadSubpage
					masthead={
						<Masthead
							background={{
								image: require('./notes.png'),
								title: 'Notes'
							}}
							foreground={
								<StuffWeWrote className={styles.stuffText} />
							}
						/>
					}
					body={
						<Grid>
							<Grid.Cell>
								<Grid.Content pad={2}>
									Notes here...
								</Grid.Content>
							</Grid.Cell>
						</Grid>

					}
				/>
			</>
		)

	}

}

export default NotesRoute
