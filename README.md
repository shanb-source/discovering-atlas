# The Wandering Atlas — Site Files

Static site, ready for GitHub Pages. No build step required.

## What's here
- `index.html` — home page
- `about.html` — your story
- `blog.html` — journal listing
- `blog-iguazu-falls.html` — full sample post (edit freely, this is just a starting draft)
- `blog-yosemite.html`, `blog-niagara.html`, `blog-argentina.html` — stub posts, ready for you to fill in
- `concierge.html` — placeholder page for the AI concierge embed (see setup note inside the file)
- `styles.css` — shared styling, navy/gold brand
- `CNAME` — tells GitHub Pages to serve this at thewanderingatlas.org (already filled in — leave as is)

## Setup steps

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (Settings icon → New repository). Name it anything, e.g. `wandering-atlas`. Make it **Public**. Don't add a template.
3. Upload every file in this folder to the repo (drag-and-drop works on github.com, or use `git push` if you're comfortable with git).
4. In the repo: **Settings → Pages**. Under "Build and deployment," set Source = "Deploy from a branch," Branch = `main`, folder = `/ (root)`. Save.
5. Still in **Settings → Pages**, under "Custom domain" enter `thewanderingatlas.org` and save. (The CNAME file already in this folder does the rest.)
6. Go to your domain registrar (wherever you bought thewanderingatlas.org) and add these DNS records:
   - Four **A records** for the root domain, pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - One **CNAME record** for `www` pointing to `yourgithubusername.github.io`
7. Wait for DNS to propagate (usually under an hour). Back in GitHub Pages settings, check **"Enforce HTTPS"** once it's available.

## To add real photos
Create an `/images` folder in the repo, upload your photos there, and replace the gradient `.photo` divs in each HTML file with `<img src="images/yourphoto.jpg" alt="...">`.

## To add the concierge
See the setup note inside `concierge.html` — two options (free but requires visitor sign-in, or small usage-based cost with your own backend).
