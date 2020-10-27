import { React, PropTypes, Classnames } from '@/vendor'
import styles from './styles.module.scss'
import { omit } from 'lodash'

class Container extends React.PureComponent {
	render () {
		return (
			<div className={styles.container} {...this.props} />
		)
	}
}

class Cell extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
		flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	}
	render () {
		const { className, flex, ...props } = this.props
		const classNames = Classnames(className, styles.cell)
		const style = {
			flex: (flex === 0) ? '0 0 auto' : flex
		}
		return (
			<div className={classNames} style={style} {...props} />
		)
	}
}

class Content extends React.PureComponent {

	static defaultProps = {
		tag: 'div'
	}

	static propTypes = {
		className: PropTypes.string,
		bg: PropTypes.string,
		pad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		tag: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	}

	get passThroughProps () {
		return omit(this.props, Object.keys(Content.propTypes))
	}

	get classNames () {
		return Classnames(
			styles.content,
			this.props.className,
			{
				[styles.bg]: !!this.props.bg
			},
			(this.props.pad) ? styles[`pad${this.props.pad}`] : null
		)
	}

	get style () {
		const style = {}
		if(this.props.bg) {
			style.backgroundImage = `url(${this.props.bg})`
		}
		return style
	}

	render () {
		return (
			<this.props.tag className={this.classNames} style={this.style} {...this.passThroughProps} />
		)
	}

}

class Grid extends React.PureComponent {

	static Container = Container
	static Cell = Cell
	static Content = Content

	static propTypes = {
		flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		stacked: PropTypes.bool,
		vhFill: PropTypes.bool,
		grow: PropTypes.bool,
		block: PropTypes.bool,
		reverse: PropTypes.bool,
		className: PropTypes.string
	}

	get classNames () {
		return Classnames(
			styles.grid,
			this.props.className,
			{
				[styles.stacked]: this.props.stacked,
				[styles.vhFill]: this.props.vhFill,
				[styles.reverse]: this.props.reverse,
				[styles.block]: this.props.block
			}
		)
	}

	get style () {
		const style = {}
		if(this.props.flex !== undefined) {
			const flex = this.props.flex
			style.flex = (flex === 0) ? '0 0 auto' : flex
		}
		if(this.props.grow === false) {
			style.flexGrow = 0
		}
		return style
	}

	get passThroughProps () {
		const localProps = Object.keys(Grid.propTypes)
		return omit(this.props, localProps)
	}

	render () {
		return (
			<div className={this.classNames} style={this.style} {...this.passThroughProps} />
		)
	}

}

export default Grid
