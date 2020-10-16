import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Velocity from 'velocity-animate'

export default () => {
	const { pathname } = useLocation()
	useEffect(() => {
		Velocity(document.body, 'scroll', {
			duration: 300,
			easing: 'easeInOutExpo'
		})
	}, [pathname])
	return null
}
