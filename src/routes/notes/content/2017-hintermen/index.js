import { React } from '@/vendor'
import { Button } from '@/components'

export default {
	title: '2017 Hintermen',
	date: '2019-11-01',
	image: require('./2017-hintermen@2x.png'),
	body: (
		<>
			<p>A blend of 72% Riesling and 28% Petit Manseng. If we had acid like this is highschool, we would all be better off! It’s like we crushed up sunlight, squirted a lime on it, then a dash of river stones, and there you have it. Bright bristling and so well balanced. This one will last a lifetime. 100 cases produced.</p>
			<p>
				<strong>FRUIT SOURCES</strong><br />
				Ox-Eye Riesling,<br />
				Rosedale Petit Manseng
			</p>
			<p>
				<strong>WINEMAKING</strong><br />
				Stomped whole clusters for a short, soft maceration before whole cluster pressing both varieties together. Co-fermented in neutral Hungarian and French oak 500L barrels. Aged for 14 months on the lees. Bottled 12/11/18 with no fining or tartrate stabilization.
			</p>
			<p>
				<strong>CHEMISTRY</strong><br />
				pH: 3.19<br />
				TA: 7.40 gm/L<br />
				Free SO2 at bottling: 19ppm<br />
				Alcohol: 12.10% abv<br />
				G/F: 2.70 g/L<br />
				Malic Acid: 1.20 g/L
			</p>
		</>
	),
	cta: <Button.Link to="/shop">Shop Wines</Button.Link>
}
