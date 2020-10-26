class Message {
	constructor(contents, sender, recipient, date) {
		this.contents = contents;
		this.sender = sender;
		this.recipient = recipient;
		this.date = date;
	}
}

$(() => {
	$('#submit-button').prop('disabled', true);

	const draftMessage = localStorage.getItem('draft-message')

	if (draftMessage !== null) {
		$('#message-field').html(draftMessage);
	}

	// Detect change in text area
	$('#message-field').on('keyup', () => {
		// Enable button if text present
		const submitButton = $('#submit-button');
		submitButton.prop('disabled', false);

		// Disable button if text deleted
		if ($('#message-field').val() === '') {
			submitButton.prop('disabled', true);
		}

		localStorage.setItem('draft-message', $('#message-field').val());
	});

	$('#submit-button').click(() => {
		const contents = $('#message-field').val();
		const message = new Message(contents, 'Person 1', 'Person 2', new Date());

		console.log(`Message: ${message.contents}`);
		console.log(`Sender: ${message.sender}`);
		console.log(`Recipient: ${message.recipient}`);
		console.log(`Date: ${message.date}`);

		localStorage.removeItem('draft-message');
	});
});
