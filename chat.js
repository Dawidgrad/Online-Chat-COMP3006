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
});
