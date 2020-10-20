import { React, PropTypes, Classnames, NavLink as BaseNavLink } from '@/vendor'
import styles from './styles.module.scss'

const NavLink = ({ className, ...props }) => {
	return (
		<BaseNavLink
			activeClassName={styles.active}
			className={Classnames(
				styles.navLink,
				className
			)}
			{...props}
		/>
	)
}

NavLink.propTypes = {
	className: PropTypes.string
}

export default NavLink
