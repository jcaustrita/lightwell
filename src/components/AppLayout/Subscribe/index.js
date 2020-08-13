import { React } from '@/vendor'
import MailingList from '@/components/MailingList'
import Text from '@/components/Text'
import styles from './styles.module.scss'

class Subscribe extends React.PureComponent {
	render () {
		return (
			<div className={styles.subscribe}>
				<Text>
					<MailingList />
				</Text>
			</div>
		)
	}
}

export default Subscribe
