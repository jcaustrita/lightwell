import { React } from '@/vendor'
import { Spinner } from '@/components'
import styles from './styles.module.scss'

class AppLoading extends React.PureComponent {
	render () {
		return (
			<div className={styles.appLoading}>
				<Spinner />
			</div>
		)
	}
}

export default AppLoading
