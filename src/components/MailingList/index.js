import { React } from '@/vendor'
import { Text } from '@/components'
import Graphic from './Graphic'
import styles from './styles.module.scss'

class MailingList extends React.PureComponent {

	state = {
		email: ''
	}

	submit = async (e) => {
		e.preventDefault()
		console.log('submit!')
	}

	render () {
		return (
			<div className={styles.mailingList}>
				<Graphic className={styles.graphic} />
				<Text className={styles.blurb}>
					Get notified on upcoming wine releases and other news.
				</Text>
				<form className={styles.form} onSubmit={this.submit}>
					<input
						type="email"
						className={styles.input}
						value={this.state.email}
						onChange={(e) => {
							this.setState({
								email: e.target.value
							})
						}}
					/>
					<input
						type="submit"
						className={styles.submit}
						value="Subscribe"
					/>
				</form>
			</div>
		)
	}

}

export default MailingList
