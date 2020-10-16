import { React, PropTypes } from '@/vendor'
import { useNavigate } from 'react-router-dom'

const Redirect = ({ to }) => {
	const navigate = useNavigate()
	setTimeout(() => {
		navigate(to)
	})
	return null
}

export default Redirect
