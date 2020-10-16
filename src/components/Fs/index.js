import { React, PropTypes, Classnames } from '@/vendor'
import styles from './styles.module.scss'

class Fs extends React.PureComponent {

	static defaultProps = {
		tag: 'div',
		variant: 'body'
	}

	static propTypes = {
		tag: PropTypes.elementType,
		variant: PropTypes.string,
		className: PropTypes.string,
		noWrap: PropTypes.bool,
		align: PropTypes.oneOf(['left', 'center', 'right', 'justify'])
	}

	getClassName = ({ className, variant, noWrap, align }) => {
		return Classnames(
			styles.fs,
			className,
			styles[variant],
			styles[align],
			{
				[styles.noWrap]: noWrap
			}
		)
	}

	render () {
		const { tag: Tag, className, variant, noWrap, align, ...props } = this.props
		return (
			<Tag
				className={this.getClassName({ className, variant, noWrap, align })}

				{...props}
			/>
		)
	}

}

export default Fs
