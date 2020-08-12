import React from 'react'
import StandardPageLayout from '@/components/StandardPageLayout'
import { Container, Helmet } from '@/components/common'
const { LayoutSection } = StandardPageLayout

class PageNotFound extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<meta name="prerender-status-code" content="404" />
				</Helmet>
				<Container>
					Page not found...
				</Container>
			</>
		)

	}

}

export const routeConfig = {
	path: '*'
}

export default PageNotFound
