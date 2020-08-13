import { React, PropTypes, Classnames } from '@/vendor'
import styles from './styles.module.scss'

class Text extends React.PureComponent {
	static propTypes = {
		uppercase: PropTypes.bool
	}
	render () {
		const { uppercase, ...props } = this.props
		return (
			<div
				className={
					Classnames(
						styles.text,
						{
							[styles.uppercase]: uppercase
						}
					)
				}
				{...props}
			/>
		)
	}
}

export default Text
