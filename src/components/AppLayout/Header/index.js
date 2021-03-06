import { React, PropTypes, Link } from '@/vendor'
import Logo from './Logo'
import Burger from './Burger'
import SocialLinks from '@/components/SocialLinks'
import NavLink from '@/components/NavLink'
import Mq from '@/components/Mq'
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
						{child}
					</li>
				))}
			</ul>
		)
	}
}

class Header extends React.PureComponent {
	static propTypes = {
		burger: PropTypes.element
	}
	static Burger = Burger
	render () {
		return (
			<Mq>
				{(Mq) => {
					const fullLayout = Mq.large
					return (
						<div className={styles.appHeader}>
							<div className={styles.cell}>
								{fullLayout && (
									<Navigation>
										<NavLink to="/shop">Shop</NavLink>
										<NavLink to="/about">About</NavLink>
										<NavLink to="/visit">Visit</NavLink>
									</Navigation>
								)}
							</div>
							<div className={styles.cell}>
								<Link to="/" className={styles.logo}>
									<Logo className={styles.logo} />
								</Link>
							</div>
							<div className={styles.cell}>
								{fullLayout ? (
									<>
										<Navigation>
											<NavLink to="/notes">Notes</NavLink>
											<NavLink to="/contact">Contact</NavLink>
										</Navigation>
										<SocialLinks />
									</>
								) : (
									this.props.burger
								)}
							</div>
						</div>
					)
				}}
			</Mq>
		)
	}
}

export default Header
