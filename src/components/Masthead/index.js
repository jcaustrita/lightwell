import { React, PropTypes } from '@/vendor'
import styles from './styles.module.scss'

class ForegroundDefault extends React.PureComponent {

	static propTypes = {
		headline: PropTypes.string,
		callout: PropTypes.shape({
			image: PropTypes.string,
			text: PropTypes.string
		})
	}

	render () {
		return (
			<>
				<h2>{this.props.headline}</h2>
				{this.props.callout && (
					<div class={styles.callout}>
						{this.props.callout.image && (
							<img src={this.props.callout.image} />
						)}
						{this.props.callout.text}
					</div>
				)}
			</>
		)
	}
}

class Masthead extends React.PureComponent {

	static Foreground = {
		Default: ForegroundDefault
	}

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
