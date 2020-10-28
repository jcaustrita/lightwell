import { React, PropTypes, Classnames, Link } from '@/vendor'
import Fs from '../Fs'
import TinySlider from '../TinySlider'
import styles from './styles.module.scss'

class Slide extends React.PureComponent {

	static propTypes = {
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}

	render () {
		return (
			<TinySlider.Slide>
				<Link to="/shop" className={styles.slideContent}>
					<img src={this.props.image} className={styles.image} />
					<Fs>
						Current Releases
						<Fs tag="h2" variant="h2" className={styles.title}>{this.props.title}</Fs>
					</Fs>
				</Link>
			</TinySlider.Slide>
		)
	}

}

class ShopCarousel extends React.PureComponent {

	static propTypes = {
		className: PropTypes.string
	}

	static Slide = Slide

	render () {
		const { className, ...props } = this.props
		return (
			<TinySlider
				className={Classnames(
					styles.shopCarousel,
					className
				)}
				{...props}
			/>
		)
	}

}

export default ShopCarousel
