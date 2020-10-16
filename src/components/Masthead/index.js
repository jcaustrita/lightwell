import { React, PropTypes } from '@/vendor'
import { Mq, Img, Fs } from '@/components'
import Headlight from './Headlight'
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
				<Fs variant="h1" tag="h1">{this.props.headline}</Fs>
				{this.props.callout && (
					<div className={styles.callout}>
						{this.props.callout.image && (
							<Img src={this.props.callout.image} />
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
		background: PropTypes.shape({
			image: PropTypes.string,
			title: PropTypes.string
		}),
		foreground: PropTypes.element
	}

	render () {
		return (
			<Mq>
				{(Mq) => (
					<div className={styles.masthead}>
						{Mq.large ? (
							<Headlight text={this.props.background.title} className={styles.headlight} />
						) : (
							<img src={this.props.background.image} className={styles.background} alt={this.props.background.title} />
						)}
						<div className={styles.foreground}>
							{this.props.foreground}
						</div>
					</div>
				)}
			</Mq>
		)
	}

}

export default Masthead
