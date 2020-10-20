import { React } from '@/vendor'
import Instagram from './Instagram'
import Twitter from './Twitter'
import styles from './styles.module.scss'

export default () => (
	<ul className={styles.socialLinks}>
		<li>
			<a href="https://www.instagram.com/lightwellsurvey" target="_blank">
				<Instagram />
			</a>
		</li>
		<li>
			<a href="https://www.twitter.com/lightwellsurvey" target="_blank">
				<Twitter />
			</a>
		</li>
	</ul>
)
