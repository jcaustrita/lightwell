import { React } from '@/vendor'
import { Text } from '@/components'
import Graphic from './Graphic'
import styles from './styles.module.scss'

const MAILCHIMP_FORM_URL = `https://lightwellsurvey.us17.list-manage.com/subscribe/post?u=6185fbfd0a020f0e5e1f3cf93&id=27a437fe17`

class MailingList extends React.PureComponent {

	state = {
		email: ''
	}

	submit = async (e) => {
		this.setState({
			email: ''
		})
	}

	render () {
		return (
			<div className={styles.mailingList}>
				<Graphic className={styles.graphic} />
				<Text className={styles.blurb}>
					Get notified on upcoming wine releases and other news.
				</Text>
				<form action={MAILCHIMP_FORM_URL} className={styles.form} onSubmit={this.submit} method="post" target="_blank">
					<input
						type="email"
						className={styles.input}
						name="EMAIL"
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
