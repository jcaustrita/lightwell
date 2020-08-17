import { React, PropTypes } from '@/vendor'
import { Mq, Grid, Text } from '@/components'
import styles from './styles.module.scss'

class Bio extends React.PureComponent {
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
							<Text>
								<h2>{name}</h2>
								<p className={styles.role}>{role}</p>
								{body}
							</Text>
						</Grid.Cell>
					</Grid>
				</Grid.Content>
			</Grid.Cell>
		)
	}
}

class Bios extends React.PureComponent {
	static Bio = Bio
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
