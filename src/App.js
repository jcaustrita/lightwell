import { React, PropTypes, Helmet } from '@/vendor'
import { Grid } from '@/components'
import { Header, Subscribe, Footer } from '@/components/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Routes
import IndexRoute from '@/routes/index'
import ShopRoute from '@/routes/shop'
import AboutRoute from '@/routes/about'
import VisitRoute from '@/routes/visit'
import NotesRoute from '@/routes/notes'
import NotesSlugRoute from '@/routes/notes/:slug'
import ContactRoute from '@/routes/contact'

class App extends React.PureComponent {

	render () {
		return (
			<BrowserRouter>
				<Helmet titleTemplate="%s :: Lightwell Survey Wines" />
				<Grid.Container>
					<Grid flex="0">
						<Grid.Cell>
							<Grid.Content>
								<Header />
							</Grid.Content>
						</Grid.Cell>
					</Grid>
					<Grid>
						<Grid.Cell>
							<Routes>
								<Route path="/" element={<IndexRoute />} />
								<Route path="/shop" element={<ShopRoute />} />
								<Route path="/about" element={<AboutRoute />} />
								<Route path="/visit" element={<VisitRoute />} />
								<Route path="/notes" element={<NotesRoute />} />
								<Route path="/notes/:slug" element={<NotesSlugRoute />} />
								<Route path="/contact" element={<ContactRoute />} />
							</Routes>
						</Grid.Cell>
					</Grid>
					<Grid flex="0">
						<Grid.Cell>
							<Grid.Content>
								<Subscribe />
							</Grid.Content>
						</Grid.Cell>
					</Grid>
					<Grid flex="0">
						<Grid.Cell>
							<Grid.Content>
								<Footer />
							</Grid.Content>
						</Grid.Cell>
					</Grid>
				</Grid.Container>
			</BrowserRouter>
		)
	}

}

export default App
