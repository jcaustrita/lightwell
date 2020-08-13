import { React, Link } from '@/vendor'
import { Text } from '@/components'
import styles from './styles.module.scss'

class Footer extends React.PureComponent {
	render () {
		return (
			<div className={styles.footer}>
				<Text uppercase={true}>
					©{(new Date().getFullYear())} Lightwell Survey Wines. <Link to="/legal">Support + Legal</Link>
				</Text>
			</div>
		)
	}
}

export default Footer
