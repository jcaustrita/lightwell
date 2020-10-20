import { React } from '@/vendor'
import PageChangeListener from '@/components/PageChangeListener'
import Velocity from 'velocity-animate'

export default () => (
	<PageChangeListener
		callback={() => {
			Velocity(document.body, 'scroll', {
				duration: 300,
				easing: 'easeInOutExpo'
			})
		}}
	/>
)
