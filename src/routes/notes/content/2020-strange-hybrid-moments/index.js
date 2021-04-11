import { React } from '@/vendor'
import { Button } from '@/components'

export default {
	title: '2020 Strange Hybrid Moments',
	date: '2021-04-10',
	image: require('./2020-strange-hybrid-moments@2x.png'),
	body: (
		<>
			<p>A blend of 33% Vidal blanc, 22% Chambourcin, 21% Blaufränkisch, 17% Petit Manseng, and 7% Traminette. 275 cases produced.</p>
			<p>
				<strong>FRUIT SOURCES</strong><br />
				Sherman Ridge and Bluestone Vidal Blanc, Bluestone Chambourcin, Oxeye Blaufränkisch, Sherman Ridge Petit Manseng, Barren Ridge Traminette, all from the Shenandoah Valley.
			</p>
			<p>
				<strong>WINEMAKING</strong><br />
				100% whole cluster fermentation on Vidal, Blaufrankisch, and Traminette, no SO2 on the fruit, on the skins for twelve days, semi carbonic and then pressed and combined with the Chambourcin and the Petit Mandseng which were whole cluster pressed. It finished primary and malo in neutral barrels and aged on lees until bottling.
			</p>
			<p>
				<strong>CHEMISTRY</strong><br />
				pH: 3.63<br />
				TA: 5.2 gm/L<br />
				Free SO2 at bottling: 4ppm<br />
				Alcohol: 11.10% abv<br />
				RS: 0.25 g/L (0.03%)<br />
				Malic Acid: {'<'}0.05 g/L
			</p>
		</>
	),
	cta: <Button.Link to="/shop">Shop Wines</Button.Link>
}
