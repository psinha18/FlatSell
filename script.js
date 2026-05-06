document.addEventListener('DOMContentLoaded', () => {

    // Handle Message Sending via Email (mailto:)
    const sendBtn = document.getElementById('send-message-btn');
    const messageBox = document.getElementById('buyer-message');
    const statusMsg = document.getElementById('form-status');

    if (sendBtn && messageBox) {
        sendBtn.addEventListener('click', () => {
            const message = messageBox.value.trim();
            
            if (!message) {
                if (statusMsg) {
                    statusMsg.textContent = 'Please enter a message before sending.';
                    statusMsg.className = 'status-msg status-error';
                }
                return;
            }
            
            const email = 'psinha18@gmail.com';
            const subject = encodeURIComponent('New Inquiry: ROF Ananda 2BHK Flat');
            const body = encodeURIComponent(message + '\n\n--\nSent from FlatSell Webpage');
            
            // Trigger mail client
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            
            // Refresh the textarea
            messageBox.value = '';
            
            // Provide feedback
            if (statusMsg) {
                statusMsg.textContent = 'Opening your default email application...';
                statusMsg.className = 'status-msg status-success';
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    statusMsg.textContent = '';
                }, 5000);
            }
        });
    }
});
