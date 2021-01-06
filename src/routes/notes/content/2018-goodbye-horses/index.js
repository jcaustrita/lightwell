import { React } from '@/vendor'
import { Button } from '@/components'

export default {
	title: '2018 Goodbye Horses',
	date: '2020-11-11',
	image: require('./2018-goodbye-horses@2x.png'),
	body: (
		<>
			<p>A blend of 91% Riesling and 9% Petit Manseng. Tinsley, silver flecked and bracing with acidity this '18 is the sharpest of the batch. Crisp green apple collides with supple pear juice and lush wildflowers. It is elegant and twitchy at the same time. Vibrant and full of acidic energy, this wine should last a few in the cellar. 93 cases produced.</p>
			<p>
				<strong>FRUIT SOURCES</strong><br />
				Oxeye Vineyard in Swoope, grower John Kiers; Rosedale Vineyard in Stuarts Draft, grower Bill Tonkins; Mount Airy Vineyard in Fort Defiance, grower is Tim and Ben Jordan
			</p>
			<p>
				<strong>WINEMAKING</strong><br />
				Foot tread then whole cluster pressed. Juice racked relatively dirty and fermented with ambient yeasts in neutral puncheon. Wine left on gross lees in barrel for 7 months without SO2. Full malolactic. Bottled June 2019 with no tartrate or protein stabilization.
			</p>
			<p>
				<strong>CHEMISTRY</strong><br />
				pH: 3.13<br />
				TA: 6.7 g/L<br />
				Free SO2 at bottling: 15 ppm<br />
				Alcohol: 11.1% abv<br />
				G/F: 2.9 g/L<br />
				Malic Acid: > 0.1g/L<br />
				Acetic acid at bottling: 0.35 g/L
			</p>
		</>
	),
	cta: <Button.Link to="/shop">Shop Wines</Button.Link>
}
