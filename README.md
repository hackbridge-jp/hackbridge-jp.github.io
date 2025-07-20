# Hack Bridge JP Website

This is the official website for [Hack Bridge JP](https://hackbridge-jp.github.io/), a platform that helps Japanese students participate in overseas collegial hackathons.

## 🌐 Live Site

**Production Website:** https://hackbridge-jp.github.io/

The site is automatically deployed from the `main` branch to GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm package manager (recommended)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/hackbridge-jp/hackbridge-jp.github.io.git
   cd hackbridge-jp.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The development server includes hot reload, so changes will automatically appear in your browser.

## 📁 Project Structure

```
hackbridge-jp.github.io/
├── docs/                    # Documentation pages
│   ├── discover/           # "What is Hackathon?" section
│   └── guide/              # Step-by-step guides
├── blog/                   # Blog posts
├── src/                    # Custom React components
│   ├── components/         # Reusable components
│   ├── css/               # Custom styles
│   └── pages/             # Custom pages
├── static/                # Static assets (images, etc.)
├── docusaurus.config.js   # Main configuration
└── sidebars.js           # Documentation sidebar structure
```

## 🛠️ Available Scripts

> **Note:** This project uses npm as the package manager. Please use npm commands instead of yarn.

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run clear` - Clear build cache

## 📝 Content Management

### Adding Documentation

1. Create new `.md` files in the `docs/` directory
2. Update `sidebars.js` to include new pages in the navigation
3. Use frontmatter for metadata:
   ```markdown
   ---
   title: Your Page Title
   description: Page description
   ---
   ```

### Adding Blog Posts

1. Create new `.md` files in the `blog/` directory
2. Use the format: `YYYY-MM-DD-title.md`
3. Include frontmatter:
   ```markdown
   ---
   title: Your Blog Post Title
   author: Author Name
   tags: [tag1, tag2]
   ---
   ```

### Custom Pages

Create React components in `src/pages/` for custom functionality.

## 🎨 Customization

### Styling
- Main styles: `src/css/custom.css`
- Component-specific styles: `src/components/*/styles.module.css`

### Configuration
- Site settings: `docusaurus.config.js`
- Navigation structure: `sidebars.js`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 1. Report Issues
- Use the [GitHub Issues](https://github.com/hackbridge-jp/hackbridge-jp.github.io/issues) page
- Provide clear descriptions and steps to reproduce

### 2. Suggest Content
- Create issues for new documentation topics
- Suggest improvements to existing content
- Propose new features or sections

### 3. Submit Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test locally: `npm start`
5. Commit your changes: `git commit -m 'Add your description'`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Create a Pull Request

### 4. Content Guidelines
- Write in Japanese for user-facing content
- Use clear, concise language
- Include practical examples and step-by-step instructions
- Follow the existing documentation structure

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

To manually deploy:
```bash
npm run deploy
```

## 📞 Support

- **Website Issues:** [GitHub Issues](https://github.com/hackbridge-jp/hackbridge-jp.github.io/issues)
- **General Questions:** [GitHub Discussions](https://github.com/hackbridge-jp/hackbridge-jp.github.io/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with [Docusaurus](https://docusaurus.io/) ❤️
