import { React, PropTypes, Classnames } from '@/vendor'
import styles from './styles.module.scss'

class Fs extends React.PureComponent {

	static defaultProps = {
		tag: 'div',
		variant: 'body',
		contained: false
	}

	static propTypes = {
		tag: PropTypes.elementType,
		variant: PropTypes.string,
		className: PropTypes.string,
		align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
		noWrap: PropTypes.bool,
		contained: PropTypes.bool
	}

	getClassName = ({ className, variant, noWrap, contained, align }) => {
		return Classnames(
			styles.fs,
			className,
			styles[variant],
			styles[align],
			{
				[styles.noWrap]: noWrap,
				[styles.contained]: contained
			}
		)
	}

	render () {
		const { tag: Tag, className, variant, noWrap, contained, align, ...props } = this.props
		return (
			<Tag
				className={this.getClassName({ className, variant, noWrap, contained, align })}

				{...props}
			/>
		)
	}

}

export default Fs
