import { React, Link } from '@/vendor'
import CSSTransition from '@/components/CSSTransition'
import NavLink from '@/components/NavLink'
import SocialLinks from '@/components/SocialLinks'
import styles from './styles.module.scss'

const NAV = [
	{ to: '/shop', title: 'Shop' },
	{ to: '/about', title: 'About' },
	{ to: '/visit', title: 'Visit' },
	{ to: '/notes', title: 'Notes' },
	{ to: '/contact', title: 'Contact' }
]

class OverlayNav extends React.PureComponent {
	render () {
		return (
			<CSSTransition
				in={this.props.active}
				classNames={{
 					enter: styles.enter,
 					enterActive: styles.enterActive,
		 			exitActive: styles.exitActive
				}}
				children={
					<div className={styles.nav}>
						<div className={styles.wrapper}>
							<ul className={styles.primary}>
								{NAV.map((item) => (
									<li key={item.to}>
										<NavLink to={item.to}>{item.title}</NavLink>
									</li>
								))}
								<li className={styles.social}>
									<SocialLinks />
								</li>
							</ul>
						</div>
					</div>
				}
			/>
		)
	}
}

export default OverlayNav
