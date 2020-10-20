import { PropTypes } from '@/vendor'
import { useNavigate } from 'react-router-dom'

const Redirect = ({ to }) => {
	const navigate = useNavigate()
	setTimeout(() => {
		navigate(to)
	})
	return null
}

Redirect.propTypes = {
	to: PropTypes.string
}

export default Redirect
