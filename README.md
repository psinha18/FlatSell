# ROF Ananda - Premium 2BHK Flat For Sale Listing

A premium, modern, and fully responsive single-page application built to showcase a 2nd-floor, road-facing flat for sale at **ROF Ananda, Sector 95, Gurugram**.

---

## 📂 Project Explorer & Structure

Below is the layout of the project files in the workspace:

```text
FlatSell/
├── .git/                      # Version control repository
├── images/                    # Image assets directory
│   ├── README.md              # Instructions for replacing placeholders
│   ├── commercial_complex.png # Nearby commercial complex placeholder
│   ├── commercial_complex1.png
│   ├── park.jpg               # Society park/play area placeholder
│   ├── park1.jpg
│   ├── security_gate.png      # 24/7 security gate placeholder
│   ├── security_gate1.png
│   ├── temple.jpg             # Society temple placeholder
│   ├── temple1.jpg
│   ├── towers.jpg             # Main towers image placeholder
│   └── towers1.jpg
├── index.html                 # Main markup page (glassmorphism UI)
├── property_tour.mp4          # Detailed property video walkthrough
├── script.js                  # Client-side interactivity and AJAX form submission
└── styles.css                 # Advanced CSS variables, layouts, and animations
```

---

## 🚀 Key Features

1. **Premium Glassmorphic UI**: Beautiful dark-theme layout using CSS glassmorphism, dynamic gradients, slide-up animations, and card shine effects.
2. **Interactive Media**:
   - Swappable image gallery with fade transition on thumbnail clicks.
   - Built-in video tour showcasing the property walkthrough.
3. **Dynamic Price Reveal**:
   - Secure and obfuscated price element decoded from Base64 (`INR 65 Lakh`).
   - Revealed only when the URL parameter `?reveal_price=true` is present.
4. **Interactive Image Preview**: Allows simulated real-time uploading/replacing of the security gate image with a preview.
5. **Secure Form Submission**: An AJAX-driven contact form utilizing FormSubmit for routing lead information to the owner's inbox.
6. **Responsive Layout**: Tailored CSS breakpoints supporting seamless viewing on mobile, tablet, and desktop screens.
