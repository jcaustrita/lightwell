import { React, PropTypes, Classnames } from '@/vendor'
import styles from './styles.module.scss'

const Burger = ({ active, ...props }) => (
	<button
		className={Classnames(
			styles['hamburger'],
			styles['hamburger--spin'],
			{
				[styles['is-active']]: active
			}
		)}
		type="button"
		aria-label="Menu"
		aria-controls="navigation"
		children={
			<span className={styles['hamburger-box']}>
				<span className={styles['hamburger-inner']} />
			</span>
		}
		{...props}
	/>
)

Burger.propTypes = {
	active: PropTypes.bool
}

export default Burger
