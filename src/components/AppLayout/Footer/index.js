import { React, Link } from '@/vendor'
import { Fs } from '@/components'
import styles from './styles.module.scss'

class Footer extends React.PureComponent {
	render () {
		return (
			<div className={styles.footer}>
				<Fs>
					©{(new Date().getFullYear())} Lightwell Survey Wines. <Link to="/legal">Support + Legal</Link>
				</Fs>
			</div>
		)
	}
}

export default Footer
