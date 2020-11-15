import { React } from '@/vendor'
import { Button } from '@/components'

export default {
	title: '2018 Los Idiots',
	date: '2020-11-11',
	image: require('./2018-los-idiots@2x.jpg'),
	body: (
		<>
			<p>Full tasting notes comin' soon... A blend of 59% Blaufränkisch, 41% Riesling. 51 cases produced.</p>
			<p>
				<strong>FRUIT SOURCES</strong><br />
				100% Mount Airy Vineyard in Fort Defiance, growers Tim and Ben Jordan
			</p>
			<p>
				<strong>WINEMAKING</strong><br />
				Whole custer, foot trod co-fermentation with no added sulfur dioxide, yeast, etc. Aged in used 500L french oak for 13 months. Bottled unfined/unfiltered with a single (20 ppm) sulfur dioxide addition, December 2019.
			</p>
			<p>
				<strong>CHEMISTRY</strong><br />
				pH: 3.76<br />
				TA: 5.4 g/L<br />
				Free SO2 at bottling: 13ppm<br />
				Alcohol: 11.1% abv<br />
				G/F: 0.04 g/L<br />
				Malic Acid: 0.05 g/L<br />
				Acetic acid at bottling: 0.46 g/L
			</p>
		</>
	),
	cta: <Button.Link to="/shop">Shop Wines</Button.Link>
}
