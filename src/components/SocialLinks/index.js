import { React, PropTypes } from '@/vendor'
import Instagram from './Instagram'
import Twitter from './Twitter'
import styles from './styles.module.scss'

class SocialLinks extends React.PureComponent {
	static propTypes = {
		liClassName: PropTypes.string
	}
	render () {
		return (
			<ul className={styles.socialLinks}>
				<li className={this.props.liClassName}><Instagram /></li>
				<li className={this.props.liClassName}><Twitter /></li>
			</ul>
		)
	}
}

export default SocialLinks
