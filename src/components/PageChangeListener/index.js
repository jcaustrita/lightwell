import { React, PropTypes } from '@/vendor'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageChangeListener = ({ callback }) => {
	const { pathname } = useLocation()
	useEffect(callback, [pathname])
	return null
}

PageChangeListener.propTypes = {
	callback: PropTypes.func
}

export default PageChangeListener
