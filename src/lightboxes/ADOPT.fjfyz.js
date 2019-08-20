import { adoptACorvid } from 'backend/adopt'
import { sendEmail } from 'backend/sendgrid'
import { createMyPayment } from 'backend/pay'
import wixPay from 'wix-pay'
import wixWindow from 'wix-window'

$w.onReady(function () {
	const corvid = wixWindow.lightbox.getContext()
	// $w('#adoptersDataset').onAfterSave((itemBeforeSave, itemAfterSave) => {
	// 	const email = itemAfterSave.email
	// 	const title = 'Congratulations! You have adopted a new Corvid!'
	// 	const content = `You are now a proud parent for ${corvid.name}`

	// 	sendEmail(email, title, content)
	// })
});

export function myButton_click(event, $w) {
	createMyPayment(event.context.itemId)
		.then((payment) => {
			wixPay.startPayment(payment.id)
		});
}

export function adoptButton_click(event) {
	let adopter = {
		name: $w("#nameInput").value,
		email: $w("#emailInput").value
	}
	adoptACorvid(adopter, '5c16ce16-08bf-4343-8cd4-811197c73e9c').then(results => {
		console.log(results)
	})
}