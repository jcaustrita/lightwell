import { React, PropTypes, Helmet } from '@/vendor'
import { Grid, Fs } from '@/components'

class Cell extends React.PureComponent {
	static propTypes = {
		headline: PropTypes.string,
		body: PropTypes.node
	}
	render () {
		return (
			<Grid.Cell>
				<Grid.Content pad={2}>
					<Fs contained>
						<Fs tag="h2" variant="h2" align="center">{this.props.headline}</Fs>
						{this.props.body}
					</Fs>
				</Grid.Content>
			</Grid.Cell>
		)
	}
}

function MailToLink () {
	const email = `wines@lightwellsurvey.com`
	return <a href={`mailto:${email}`}>{email}</a>
}

class LegalRoute extends React.PureComponent {

	render () {

		return (
			<>
				<Helmet>
					<title>Legal</title>
				</Helmet>
				<Grid stacked>
					<Cell
						headline="Shipping"
						body={
							<p>Lightwell Survey orders ship frequently year-round. During the summer season, when the weather gets spicy, we typically stop all customer shipments until September once the weather is better suited for shipping unfiltered wines. All orders will ship via Lightwell Survey's chosen courier. Once shipped, you will receive a confirmation email outlining the details of your delicious order. Please contact Lightwell Survey if you have any questions about your order: <MailToLink /></p>
						}
					/>
					<Cell
						headline="Returns"
						body={
							<p>Lightwell Survey does not return or exchange purchases, sorry. Please contact Lightwell Survey if you have a quesiton at <MailToLink /></p>
						}
					/>
					<Cell
						headline="Sale of Booze"
						body={
							<p>Lightwell Survey does not sell alcohol to human beings under the age of 21. Lightwell Survey makes efforts to ensure that alcoholic beverages are not delivered to any human being who is under said age. By using lightwellsurvey.com, you confirm and acknowledge that you are human and over the age of 21, that the human placing the order is over the age of 21, the human receiving a delivery of alcoholic beverages from Lightwell Survey is over the age of 21, and the human recipient of shipments containing alcoholic beverages signing for said shipment is a human being of 21 years of age or older. You also agree that any alcohol purchased from Lightwell Survey is intended for human consumption and not for resale. If you do not agree with these conditions of use, please do not use this site and leave promptly. If you intentionally or unintentionally misrepresent your age in order to provide alcohol to anyone under the age of 21, we will prosecute you fully to the extent allowable by law, don't be a butthole.</p>
						}
					/>
					<Cell
						headline="Privacy"
						body={
							<p>Personal information such as your name, address, email address, or phone number will not be collected unless given by your own will. If you send personal information to Lightwell Survey, it will be stored and could be used by Lightwell Survey or our third-party email solution for use in marketing or solicitation. Your personal information will not be sold, shared, given, traded, handed out or disclosed to a third-party other than our email and ecommerce solution.</p>
						}
					/>
					<Cell
						headline="Terms"
						body={
							<>
								<p>In using lightwellsurvey.com you are agreeing to the terms and conditions that are beautifully displayed on this page. No take backs. Please review these terms and conditions. Entering lightwellsurvey.com constitutes your agreement to follow and abide by these terms and conditions. If you choose to deny these terms and conditions please do not use lightwellsurvey.com and visit another website. Lightwell Survey reserves the right to update and change the terms and conditions at any time... cuz we can do that, they're our terms and conditions. So, please review the terms and conditions after each visit to the site.</p>
								<p>All content on lightwellsurvey.com is the sole property of Lightwell Survey Wines. All photos, graphics, and copy are protected by the international copyright and intellectual property laws. You may not copy, transfer, reproduce, retransmit, modify, borrow, or sell any portion of this site without the written permission of Lightwell Survey.</p>
								<p>You agree to not hold Lightwell Survey responsible against all losses, claims, damages, expenses and costs, including attorneys’ fees resulting from any violation of these terms and conditions related to you.</p>
								<p>If you would like to remove or cancel your information from our upcoming database, change your information, or opt out of receiving communication, you may contact us at <MailToLink /> or follow the unsubscribe link in your emails from Lightwell Survey emails.</p>
							</>
						}
					/>
				</Grid>
			</>
		)

	}

}

export default LegalRoute
