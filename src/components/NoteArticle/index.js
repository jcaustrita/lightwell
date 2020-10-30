import { React, PropTypes } from '@/vendor'
import { Img, Fs } from '@/components'
import styles from './styles.module.scss'

class NoteArticle extends React.PureComponent {

	static propTypes = {
		title: PropTypes.string,
		image: PropTypes.string,
		body: PropTypes.element,
		cta: PropTypes.element
	}

	render () {
		return (
			<div>
				<Img
					src={this.props.image}
					className={styles.image}
				/>
				<Fs contained>
					<Fs variant="h1" tag="h1" align="center">{this.props.title}</Fs>
					{this.props.body}
				</Fs>
				{this.props.cta && (
					<div className={styles.cta}>
						{this.props.cta}
					</div>
				)}
			</div>
		)
	}


}

export default NoteArticle
