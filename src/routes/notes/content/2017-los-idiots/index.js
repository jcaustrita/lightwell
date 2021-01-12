import { React } from '@/vendor'
import { Button } from '@/components'

export default {
	title: '2017 Los Idiots',
	date: '2019-11-01',
	image: require('./2017-los-idiots@2x.png'),
	body: (
		<>
			<p>A blend of 59% Syrah and 41% Riesling. I said DAMN thats juicy man! Wild Ripe fruits bouncing all over this banger. The scent is magical, somewhere between heaven and hell, it`s hard to know which is better. The richness and baby fat round out the mouthfeel without being cloying. This is a day drinker, a Sunday afternoon, a stroll in the park, but don’t be fooled, it’ll get ya hooked, and a second bottle will take you out all night. 46 cases produced.</p>
			<p>
				<strong>FRUIT SOURCES</strong><br />
				Quaker Run Syrah (59%)<br />
				Shenandoah Vineyards Riesling (39%)<br />
				Ox-Eye Riesling (2%)
			</p>
			<p>
				<strong>WINEMAKING</strong><br />
				Whole custer, foot trod co-fermentation with no added sulfur dioxide, yeast, etc. Aged in neutral 228L french oak for 13 months. Bottled unfined/unfiltered with first and only (25ppm) sulfur dioxide addition on Halloween, 2018.
			</p>
			<p>
				<strong>CHEMISTRY</strong><br />
				pH: 3.71<br />
				TA: 5.70 gm/L<br />
				Free SO2 at bottling: 13ppm<br />
				Alcohol: 11.00% abv<br />
				G/F: 0.09 g/L<br />
				Malic Acid: 0.03 g/L
			</p>
		</>
	),
	cta: <Button.Link to="/shop">Shop Wines</Button.Link>
}
