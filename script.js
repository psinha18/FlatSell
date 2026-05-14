document.addEventListener('DOMContentLoaded', () => {

    const sendBtn = document.getElementById('send-message-btn');
    const nameInput = document.getElementById('buyer-name');
    const mobileInput = document.getElementById('buyer-mobile');
    const messageBox = document.getElementById('buyer-message');
    const statusMsg = document.getElementById('form-status');

    if (sendBtn && messageBox && nameInput && mobileInput) {
        sendBtn.addEventListener('click', async () => {
            const name = nameInput.value.trim();
            const mobile = mobileInput.value.trim();
            const message = messageBox.value.trim();
            
            if (!name || !mobile || !message) {
                if (statusMsg) {
                    statusMsg.textContent = 'Please fill in all mandatory fields (Name, Mobile, and Message).';
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
                        name: name,
                        mobile: mobile,
                        message: message,
                        _subject: `New Inquiry from ${name}`,
                        _template: "table"
                    })
                });

                const result = await response.json();

                if (response.ok) {
                    statusMsg.textContent = 'Message sent successfully! The owner will be in touch.';
                    statusMsg.className = 'status-msg status-success';
                    nameInput.value = '';
                    mobileInput.value = '';
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
    // Gallery switching logic
    const mainImg = document.querySelector('.main-img');
    const thumbnails = document.querySelectorAll('.gallery-thumbnails .gallery-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Store current main src to swap back if needed, or just replace
            const newSrc = thumb.src;
            const newAlt = thumb.alt;
            
            // Simple fade transition effect
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = newSrc;
                mainImg.alt = newAlt;
                mainImg.style.opacity = '1';
            }, 200);
        });
        
        // Add pointer cursor to thumbnails
        thumb.style.cursor = 'pointer';
    });

    // Security Gate Image Upload Preview
    const securityUploadInput = document.getElementById('security-upload-input');
    const securityPreviewImg = document.getElementById('security-preview');

    if (securityUploadInput && securityPreviewImg) {
        securityUploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    securityPreviewImg.src = event.target.result;
                    
                    // Also update the gallery thumbnail if it exists
                    const galleryThumb = document.querySelector('img[src*="security_gate"]');
                    if (galleryThumb) {
                        galleryThumb.src = event.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
