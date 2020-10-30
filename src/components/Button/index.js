import { React, PropTypes, Classnames, Link } from '@/vendor'
import styles from './styles.module.scss'

class Button extends React.PureComponent {

	static defaultProps = {
		tag: 'button'
	}

	static propTypes = {
		tag: PropTypes.elementType,
		className: PropTypes.string
	}

	static Link = class extends React.PureComponent {
		render () {
			const Tag = ('to' in this.props) ? Link : 'a'
			return <Button tag={Tag} {...this.props} />
		}
	}

	render () {
		const { tag: Tag, className, ...props } = this.props
		return (
			<Tag
				className={Classnames(
					styles.button,
					className
				)}
				{...props}
			/>
		)
	}

}

export default Button
