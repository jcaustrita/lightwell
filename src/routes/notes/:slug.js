import { React, PropTypes, Helmet } from '@/vendor'
import { NoteArticle, Grid, Redirect } from '@/components'
const content = require('./content/**/index.js')
import { useParams } from 'react-router-dom'

class NotesSlugRoute extends React.PureComponent {

	static propTypes = {
		title: PropTypes.string
	}

	render () {
		return (
			<>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>
				<Grid>
					<Grid.Cell>
						<Grid.Content pad={1}>
							<NoteArticle {...this.props} />
						</Grid.Content>
					</Grid.Cell>
				</Grid>
			</>
		)

	}

}

export default () => {
	const params = useParams()
	const matched = content[params.slug]?.default
	if(matched) {
		return <NotesSlugRoute {...matched} />
	}
	return <Redirect to=".." />
}
