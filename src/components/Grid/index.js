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
	render () {
		return (
			<div className={styles.cell} {...this.props} />
		)
	}
}

class Content extends React.PureComponent {

	static propTypes = {
		vhFill: PropTypes.bool
	}

	get passThroughProps () {
		return omit(this.props, Object.keys(Content.propTypes))
	}

	get classNames () {
		return Classnames(
			styles.content,
			{
				[styles.vhFill]: this.props.vhFill
			}
		)
	}

	render () {
		return (
			<div className={this.classNames} {...this.passThroughProps} />
		)
	}

}

class Grid extends React.PureComponent {

	static Container = Container
	static Cell = Cell
	static Content = Content

	static propTypes = {
		flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		stacked: PropTypes.bool
	}

	get classNames () {
		return Classnames(
			styles.grid,
			{
				[styles.stacked]: this.props.stacked
			}
		)
	}

	get style () {
		const style = {}
		if(this.props.flex) {
			style.flex = this.props.flex
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
