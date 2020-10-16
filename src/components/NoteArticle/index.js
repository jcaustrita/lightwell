import { React, PropTypes } from '@/vendor'
import { Img } from '@/components'
import styles from './styles.module.scss'

class NoteArticle extends React.PureComponent {

	static propTypes = {
		title: PropTypes.string,
		image: PropTypes.string,
		body: PropTypes.element
	}

	render () {
		return (
			<div>
				<Img
					src={this.props.image}
					className={styles.image}
				/>
				<div className={styles.body}>
					<h1 className={styles.title}>{this.props.title}</h1>
					{this.props.body}
				</div>
			</div>
		)
	}


}

export default NoteArticle
