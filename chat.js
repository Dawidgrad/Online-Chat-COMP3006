import { Message } from './message';

$(() => {
	$('#submit-button').prop('disabled', true);

	// Detect change in text area
	$('#message-field').on('keyup', () => {
		// Enable button if text present
		const submitButton = $('#submit-button');
		submitButton.prop('disabled', false);

		// Disable button if text deleted
		if ($('#message-field').val() === '') {
			submitButton.prop('disabled', true);
		}
	});

	$('#send-message').click(() => {
		const contents = $('#message-field').html();
		const message = new Message(contents, 'Person 1', 'Person 2', new Date());
		console.log(`Message: ${message.contents}`);
		console.log(`Sender: ${message.sender}`);
		console.log(`Recipient: ${message.recipient}`);
		console.log(`Date: ${message.date}`);
	});
});
