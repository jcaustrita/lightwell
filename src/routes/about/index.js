import { React, PropTypes, Helmet } from '@/vendor'
import { Mq, Grid, MastheadSubpage, Masthead, Bios } from '@/components'

const { Bio } = Bios

class AboutRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>About</title>
				</Helmet>
				<MastheadSubpage
					masthead={
						<Masthead
							background={require('./about.png')}
							foreground={
								<Masthead.Foreground.Default
									headline="Our Story"
								/>
							}
						/>
					}
					body={
						<Mq>
							{(Mq) => (
								<Bios>
									<Bio
										headshot={
											<img
												src={require('./headshots/sebastian@2x.png')}
												width={388}
											/>
										}
										name="Sebastian"
										role="The Baby Kisser"
										body={
											<p>
												Raised in the DC suburbs, Sebastian Zutant attended the College of Charleston before returning to the District to navigate his way through the city’s restaurant ranks, including a stint at Nectar before opening Komi, overhauling the beverage program at Rasika, spearheading the wine list at Proof, opening Red Hen in 2013 and All Purpose in 2016. As the former lead singer for SuperKid, his real-life experiences have tainted him in a manner that explains a lot. As a disappointed Bills fan, Sebastian lives in Brookland, D.C. where he opened up the neighborhood French spot, Primrose, with his wife and two Kids.
											</p>
										}
									/>
									<Bio
										headshot={
											<img
												src={require('./headshots/ben@2x.png')}
												width={392}
											/>
										}
										name="Ben"
										role="The Winemaker"
										body={
											<p>
												Ben is the winemaker and vineyard liaison for Lightwell. He joined the Zutant brothers, lured by the possibility of working as a micro-negoce on the fringes of the wine industry in Virginia. He worked for an wine importer in San Francisco and made wine in Sonoma County before returning to his home state to join the evolution of East Coast wine.
											</p>
										}
									/>
									<Bio
										headshot={
											<img
												src={require('./headshots/jay@2x.png')}
												width={305}
											/>
										}
										name="Jay"
										role="The Erlich"
										body={
											<p>
												Hailing from the great State of Maryland, Jay is on the hook for the business operations of Lightwell. Jay is a beer guy who brings the craft lens and his bullshit to the group. Surprisingly, he was actually employed by StubHub/eBay for a bunch of years, no one is really sure what Jay did there, but he did show Sebastian his badge once. His lack of business knowledge is currently hindering the growth of Lightwell. Living in the hamlet of Mill Valley, CA with his wife Juli and dog Jackson, Jay should probably not even be recognized here.
											</p>
										}
									/>
									<Bio
										headshot={
											<img
												src={require('./headshots/julian@2x.png')}
												width={449}
											/>
										}
										name="Julian"
										role="The Big Taco"
										body={
											<p>
												An aspiring dancer from the flats of California and first mate of the Juno, Julian Caustrita got his start as a street magician after a stint at California Poly Tech. Due to a tragic accident involving a giraffe and a pumpkin he decided to pivot his skills and focus on branding and UX design in California. As the Creative Director of Active Ingredients in Marin County, he has worked with loads of agencies to create lasting digital impressions that leave most questioning what he can’t do. Julian lives in and rarely leaves Sausalito with his fiancé, puppy Meatball, bocce trophies, and an overflowing beer collection.
											</p>
										}
									/>
									<Bio
										headshot={
											<img
												src={require('./headshots/john@2x.png')}
												width={287}
											/>
										}
										name="John"
										role="The Artiste’"
										body={
											<p>
												John DeNapoli has not officially joined Lightwell Survey, but he wants in and we are thinking about it. As an architect by trade, he specializes in restaurant and hospitality design. John works alongside local chefs and restaurants to create somewhat memorable dining and drinking experiences in the Mid-Atlantic. John’s current claim to fame at Lightwell is that he copied all of the images for the 2015 wines from his grade school coloring book. Hailing from outside Boston, MA and barely graduating from Syracuse University, he is currently living on the streets of Washington D.C.
											</p>
										}
									/>
								</Bios>
							)}
						</Mq>
					}
				/>
			</>
		)

	}

}

export default AboutRoute
