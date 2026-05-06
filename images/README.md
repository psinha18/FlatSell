# Image Upload Instructions for Admin

To update the images on the webpage, follow these simple steps:

1. **Prepare your images**:
   - Save your tower image as `towers.jpg`
   - Save your park/play area image as `park.jpg`
   - Save your temple image as `temple.jpg`

2. **Upload/Place images**:
   - Place these three files directly into this `images/` folder.
   - The webpage will automatically detect these files and display them instead of the placeholders.

3. **Technical Note**:
   - The webpage uses an `onerror` fallback. If the `.jpg` file is missing, it will show the `.svg` placeholder.
   - Supported format: `.jpg` (You can change the extension in `index.html` if you prefer `.png` or `.webp`).
