import { React, PropTypes, Classnames } from '@/vendor'
import styles from './styles.module.scss'

class Text extends React.PureComponent {
	static propTypes = {
		uppercase: PropTypes.bool,
		center: PropTypes.bool
	}
	render () {
		const { uppercase, center, ...props } = this.props
		return (
			<div
				className={
					Classnames(
						styles.text,
						{
							[styles.uppercase]: uppercase,
							[styles.center]: center
						}
					)
				}
				{...props}
			/>
		)
	}
}

export default Text
