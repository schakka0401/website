# Sai Pranav Chakka — Developer Portfolio

Responsive personal website built with React + Vite, ready for Vercel.

## Run locally

Install a modern Node.js LTS version, then in the `developer-portfolio` folder:

```bash
npm install
npm run dev
```

## Deploy on Vercel (GitHub method)

1. Create a new empty GitHub repository, such as `developer-portfolio`.
2. Open a terminal inside **this folder** (the one containing `package.json`).
3. Run the following, replacing `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/developer-portfolio.git
git push -u origin main
```

4. Go to https://vercel.com/new and import your new GitHub repository.
5. Vercel should detect Vite. Confirm **Build Command** `npm run build` and **Output Directory** `dist`.
6. Click **Deploy**. You will get a URL ending in `.vercel.app`.
7. Future pushes to `main` automatically update the deployed site.

**Alternative without GitHub:** install Vercel CLI (`npm install -g vercel`), sign in, and run `vercel --prod` from this folder.

## Personalize before sharing

- LinkedIn is already configured: https://www.linkedin.com/in/sai-pranav-c-/
- In `src/data.js`, replace `YOUR_EMAIL@example.com` with your preferred public contact email.
- Confirm the GitHub profile and project links listed in `src/data.js`.
- The resume button expects `public/resume.pdf`. Add your resume there before publishing or remove the button until ready.
- Edit the experience, project descriptions and skills as you wish.

No backend, secrets, or environment variables required.
