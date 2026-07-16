# Ethical Hacking & AI Awareness — Event Feature Website

A responsive, accessible static website for the article **“Empowering Future Cybersecurity Professionals Through Ethical Hacking and AI Awareness.”**

## Local preview

Open `index.html` directly in a browser, or run a local web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub and Vercel

1. Create a new GitHub repository.
2. Upload all files and the `assets` folder from this project.
3. In Vercel, select **Add New → Project**.
4. Import the GitHub repository.
5. Keep **Framework Preset** as `Other`.
6. Leave Build Command and Output Directory empty.
7. Select **Deploy**.

Vercel will publish the site and provide a public URL that can be sent to the newsletter editor.

## Project files

- `index.html` — full article and page structure
- `styles.css` — responsive visual design
- `script.js` — native sharing and clipboard support
- `assets/image1.jpeg` — workshop event image
- `vercel.json` — Vercel static-site settings
