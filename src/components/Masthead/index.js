import { React, PropTypes } from '@/vendor'
import styles from './styles.module.scss'

class Masthead extends React.PureComponent {

	static propTypes = {
		background: PropTypes.string,
		foreground: PropTypes.element
	}

	render () {
		return (
			<div className={styles.masthead}>
				<img src={this.props.background} className={styles.background} />
				<div className={styles.foreground}>
					{this.props.foreground}
				</div>
			</div>
		)
	}

}

export default Masthead
