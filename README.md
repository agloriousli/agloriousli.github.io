# Gloria Li - Personal Portfolio

Welcome to my personal portfolio website! This is a modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Friendly**: Built with Next.js for optimal search engine optimization
- **GitHub Pages**: Automatically deployed to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Deployment**: GitHub Pages + GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/agloriousli/agloriousli.github.io.git
cd agloriousli.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Build**: Next.js builds the static site
2. **Export**: Static files are generated in the `out` directory
3. **Deploy**: Files are automatically deployed to GitHub Pages

### Manual Deployment

To build the site locally:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions
```

## 🎨 Customization

### Colors and Themes

The site uses a purple-pink gradient theme. You can customize colors in:
- `app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration

### Content

Update the content in `app/page.tsx`:
- Personal information
- Skills and experience
- Projects and awards
- Contact information

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Gloria Li 