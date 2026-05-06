document.addEventListener('DOMContentLoaded', () => {

    const sendBtn = document.getElementById('send-message-btn');
    const messageBox = document.getElementById('buyer-message');
    const statusMsg = document.getElementById('form-status');

    if (sendBtn && messageBox) {
        sendBtn.addEventListener('click', async () => {
            const message = messageBox.value.trim();
            
            if (!message) {
                if (statusMsg) {
                    statusMsg.textContent = 'Please enter a message.';
                    statusMsg.className = 'status-msg status-error';
                }
                return;
            }

            // Provide immediate feedback
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sending...';
            statusMsg.textContent = 'Processing your message...';
            statusMsg.className = 'status-msg';

            // Obfuscated email to hide from basic scrapers
            const user = 'psinha18';
            const domain = 'gmail.com';
            const endpoint = `https://formsubmit.co/ajax/${user}@${domain}`;

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        message: message,
                        _subject: "New Inquiry: ROF Ananda 2BHK Flat",
                        _template: "table"
                    })
                });

                const result = await response.json();

                if (response.ok) {
                    statusMsg.textContent = 'Message sent successfully! The owner will be in touch.';
                    statusMsg.className = 'status-msg status-success';
                    messageBox.value = '';
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                statusMsg.textContent = 'Sorry, there was an error. Please try again later.';
                statusMsg.className = 'status-msg status-error';
            } finally {
                sendBtn.disabled = false;
                sendBtn.textContent = 'Send Message';
            }
        });
    }
});
