import { React, Helmet } from '@/vendor'
import { Grid, Mq, ScrollToTop, PageChangeListener } from '@/components'
import { Header, Subscribe, Footer, OverlayNav } from '@/components/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Routes
import IndexRoute from '@/routes/index'
import ShopRoute from '@/routes/shop'
import AboutRoute from '@/routes/about'
import VisitRoute from '@/routes/visit'
import NotesRoute from '@/routes/notes'
import NotesSlugRoute from '@/routes/notes/:slug'
import ContactRoute from '@/routes/contact'
import LegalRoute from '@/routes/legal'

class App extends React.PureComponent {

	state = {
		overlayNavActive: false
	}

	get breakpoints () {
		return {
			small: 'screen and (max-width: 767px)',
			medium: 'screen and (min-width: 768px) and (max-width: 999px)',
			large: 'screen and (min-width: 1180px)'
		}
	}

	render () {
		return (
			<BrowserRouter>
				<PageChangeListener
					callback={() => {
						this.setState({
							overlayNavActive: false
						})
					}}
				/>
				<ScrollToTop />
				<Mq.Provider config={this.breakpoints}>
					<Helmet titleTemplate="%s :: Lightwell Survey Wines" />
					<OverlayNav active={this.state.overlayNavActive} />
					<Grid.Container>
						<Grid flex="0">
							<Grid.Cell>
								<Header
									burger={
										<Header.Burger
											active={this.state.overlayNavActive}
											onClick={() => {
												this.setState({
													overlayNavActive: !this.state.overlayNavActive
												})
											}}
										/>
									}
								/>
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
									<Route path="/legal" element={<LegalRoute />} />
								</Routes>
							</Grid.Cell>
						</Grid>
						<Grid flex="0">
							<Grid.Cell>
								<Subscribe />
							</Grid.Cell>
						</Grid>
						<Grid flex="0">
							<Grid.Cell>
								<Footer />
							</Grid.Cell>
						</Grid>
					</Grid.Container>
				</Mq.Provider>
			</BrowserRouter>
		)
	}

}

export default App
