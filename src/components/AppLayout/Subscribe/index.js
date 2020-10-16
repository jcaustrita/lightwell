import { React } from '@/vendor'
import MailingList from '@/components/MailingList'
import styles from './styles.module.scss'

class Subscribe extends React.PureComponent {
	render () {
		return (
			<div className={styles.subscribe}>
				<MailingList />
			</div>
		)
	}
}

export default Subscribe
