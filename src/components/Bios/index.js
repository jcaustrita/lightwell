import { React, PropTypes } from '@/vendor'
import { Mq, Grid, Fs } from '@/components'
import styles from './styles.module.scss'

class Bio extends React.PureComponent {

	static propTypes = {
		headshot: PropTypes.element,
		name: PropTypes.string,
		role: PropTypes.string,
		body: PropTypes.node,
		flip: PropTypes.bool,
		stacked: PropTypes.bool
	}

	render () {
		const { headshot, name, role, body, flip, stacked } = this.props
		return (
			<Grid.Cell>
				<Grid.Content pad={2}>
					<Grid reverse={flip} stacked={stacked} className={styles.bio}>
						<Grid.Cell flex={0}>
							{headshot}
						</Grid.Cell>
						<Grid.Cell>
							<Fs>
								<Fs variant="h2" tag="h2">{name}</Fs>
								<Fs variant="meta" tag="p" className={styles.role}>{role}</Fs>
								{body}
							</Fs>
						</Grid.Cell>
					</Grid>
				</Grid.Content>
			</Grid.Cell>
		)
	}

}

class Bios extends React.PureComponent {
	static Bio = Bio
	static propTypes = {
		children: PropTypes.node
	}
	render () {
		return (
			<Mq>
				{(Mq) => (
					<Grid stacked={true}>
						{React.Children.map(this.props.children, (child, idx) => (
							React.cloneElement(child, {
								flip: Mq.large && ((idx & 1) === 1),
								stacked: !Mq.large
							})
						))}
					</Grid>
				)}
			</Mq>
		)
	}
}

export default Bios
