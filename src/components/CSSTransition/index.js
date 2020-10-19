import { React } from '@/vendor'
import { CSSTransition } from 'react-transition-group'

export default (props) => (
	<CSSTransition
		mountOnEnter
		unmountOnExit
		addEndListener={(node, done) => {
			node.addEventListener('transitionend', done, false)
		}}
		{...props}
	/>
)
