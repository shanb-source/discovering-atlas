# Adding Your Photos

Every image slot on the site is currently a navy/gold gradient placeholder so the layout works before you have images uploaded. Here's exactly how to swap in your own.

## 1. Upload your photos to the repo
- In your GitHub repo, click **Add file → Create new file**
- Type `images/` then a filename (e.g. `images/hero-mountains.jpg`) — typing the slash creates the folder automatically
- Actually for photos, use **Add file → Upload files** instead (Create new file is for text), and type `images/hero-mountains.jpg` as you drag in the photo, or just create the `images` folder first by uploading one file into it

## 2. Two kinds of photo spots on the site

**A) The big full-bleed hero photo** (the one behind "Take in the wild...")
Open `styles.css`, find `.photo-hero{`, and replace this line:
```css
background-image:linear-gradient(160deg, var(--navy) 0%, var(--teal) 100%);
```
with:
```css
background-image:url('images/hero-mountains.jpg');
background-size:cover;
background-position:center;
```

**B) The destination card photos** (Iguazú, Yosemite, etc.)
Open `styles.css`, find `.photo-card .photo{`, and replace:
```css
background-image:linear-gradient(160deg, var(--navy) 0%, var(--teal) 130%);
```
Since all cards currently share one style, give each card its own photo by adding a unique class in the HTML instead — e.g. in `index.html`, change:
```html
<div class="card photo-card">
  <div class="photo">
```
to:
```html
<div class="card photo-card">
  <div class="photo" style="background-image:url('images/iguazu.jpg');">
```
Do this per card, one image per destination.

## 3. Recommended photo specs
- Hero photo: at least 1600px wide, landscape orientation, not too busy in the center (text sits on top)
- Card photos: at least 800px wide, landscape or square works
- Keep file sizes reasonable (under ~500KB each) so pages load fast — most phone photos will need compressing first (any free online compressor like squoosh.app works well)
