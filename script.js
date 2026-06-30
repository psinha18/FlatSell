document.addEventListener('DOMContentLoaded', () => {

    // Check if price should be revealed
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('reveal_price') === 'true') {
        const priceEl = document.getElementById('property-price');
        if (priceEl) {
            // Use base64 to slightly obfuscate the price from plain text scanners
            priceEl.textContent = atob('SU5SIDY1IExha2g='); // INR 65 Lakh
            priceEl.style.fontSize = '3rem'; // Restore original size
            
            // Re-add the price label
            const labelEl = document.createElement('span');
            labelEl.className = 'price-label';
            labelEl.textContent = 'Price';
            priceEl.parentNode.appendChild(labelEl);
        }
    }

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

            // Generate a reveal link that the owner can share with the requester
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('reveal_price', 'true');
            let revealLink = currentUrl.toString();
            
            // Prevent Formsubmit from blocking local test links as spam
            if (revealLink.startsWith('file:') || revealLink.includes('localhost') || revealLink.includes('127.0.0.1')) {
                revealLink = '[Live URL]?reveal_price=true';
            }

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
                        Reveal_Price_Link: revealLink,
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

});
