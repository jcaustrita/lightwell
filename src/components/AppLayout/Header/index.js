import { React, PropTypes, Link, NavLink as BaseNavLink } from '@/vendor'
import Logo from './Logo'
import { SocialLinks } from '@/components'
import styles from './styles.module.scss'

class Navigation extends React.PureComponent {
	static propTypes = {
		children: PropTypes.node
	}
	render () {
		return (
			<ul className={styles.nav}>
				{React.Children.map(this.props.children, (child) => (
					<li className={styles.navItem}>
						{React.cloneElement(child, {
							className: styles.navLink
						})}
					</li>
				))}
			</ul>
		)
	}
}

function NavLink (props) {
	return <BaseNavLink {...props} activeClassName={styles.active} />
}

class Header extends React.PureComponent {
	render () {
		return (
			<div className={styles.appHeader}>
				<div className={styles.cell}>
					<Navigation>
						<NavLink to="/shop">Shop</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/visit">Visit</NavLink>
					</Navigation>
				</div>
				<div className={styles.cell}>
					<Link to="/" className={styles.logo}>
						<Logo className={styles.logo} />
					</Link>
				</div>
				<div className={styles.cell}>
					<Navigation>
						<NavLink to="/notes">Notes</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</Navigation>
					<SocialLinks
						liClassName={styles.socialLink}
					/>
				</div>
			</div>
		)
	}
}

export default Header
