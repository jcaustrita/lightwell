import { React, Link } from '@/vendor'
import { CSSTransition } from '@/components'
import styles from './styles.module.scss'

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
						nav items here
					</div>
				}
			/>
		)
	}
}

export default OverlayNav
