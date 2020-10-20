import { React } from '@/vendor'
import { Fs } from '@/components'
import Graphic from './Graphic'
import styles from './styles.module.scss'

const MAILCHIMP_FORM_URL = `https://lightwellsurvey.us17.list-manage.com/subscribe/post?u=6185fbfd0a020f0e5e1f3cf93&id=27a437fe17`

class MailingList extends React.PureComponent {

	state = {
		email: ''
	}

	render () {
		return (
			<div className={styles.mailingList}>
				<Graphic className={styles.graphic} />
				<Fs contained align="center">
					<p>Get notified on upcoming wine releases and other news.</p>
				</Fs>
				<form action={MAILCHIMP_FORM_URL} className={styles.form} method="post" target="_blank">
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
						placeholder="Your email address"
					/>
					<span className={styles.honeypot} aria-hidden="true">
						<input
							type="text"
							name="b_6185fbfd0a020f0e5e1f3cf93_27a437fe17"
							tabIndex="-1"
						/>
					</span>
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
