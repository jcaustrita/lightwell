import { React, PropTypes, Helmet, NavLink } from '@/vendor'
import { Grid, MastheadSubpage, Masthead } from '@/components'
import StuffWeWrote from './StuffWeWrote'
import styles from './styles.module.scss'

const content = (() => {
	const mapped = Object.entries(require('./content/**/index.js')).map(([slug, component]) => {
		const { title, date } = component.default
		return {
			slug,
			title,
			date: new Date(date)
		}
	})
	return mapped.sort((a, b) => a.date - b.date)
})()

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
						<Grid stacked block>
							{content.map((item) => (
								<Grid.Cell key={item.slug}>
									<Grid.Content
										className={styles.noteItem}
										tag={NavLink}
										pad={1}
										to={`./${item.slug}`}
										children={item.title}
									/>
								</Grid.Cell>
							))}
						</Grid>

					}
				/>
			</>
		)

	}

}

export default NotesRoute
