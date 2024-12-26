# Natalia Portfolio

This is the source code for Natalia's portfolio, a sleek and modern web application showcasing projects, skills, and professional information. Built with Next.js, TypeScript, and styled-components, this portfolio is designed for a seamless and responsive user experience.

---

## Features

- **Project Showcase:** Highlight projects with detailed images and descriptions.
- **Responsive Design:** Optimized for all devices, ensuring usability across desktop, tablet, and mobile.
- **Theming:** Custom fonts and colors for a visually appealing design.
- **SEO Friendly:** Includes sitemap and robots configuration for improved search engine visibility.
- **Fast Loading:** Implements loaders and intersection observers for a smooth experience.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** styled-components
- **Linting:** ESLint (Airbnb and Prettier configs)
- **Icons:** react-icons, MUI Icons

---

## Directory Structure

```
renanbianchi-natalia-portfolio/
├── next.config.mjs            # Next.js configuration
├── .eslintrc.js               # ESLint configuration
├── public/                    # Static assets
│   ├── fonts/                 # Custom fonts
│   ├── images/                # Image assets
│   ├── theme/                 # Theming files
│   └── icons/                 # Custom icons
├── package.json               # Project dependencies
├── styled.d.ts                # Styled-components theme definition
├── tsconfig.json              # TypeScript configuration
├── src/                       # Source code
│   ├── components/            # Reusable React components
│   └── app/                   # Next.js app directory (pages, layout, etc.)
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/natalia-portfolio.git
   cd natalia-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run start` - Start the production server.
- `npm run lint` - Run ESLint to check for code issues.

---

## Configuration

### `next.config.mjs`

- Enables React strict mode.
- Configures styled-components for better integration.

### `.eslintrc.js`

- Extends Airbnb, Prettier, and Next.js ESLint configurations.
- Includes custom rules for flexibility and better code standards.

### `public/theme/index.ts`

- Defines custom fonts and color palette.
- Integrates local and Google fonts.

---

## Deployment

To deploy the application, follow these steps:

1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy the `.next` folder using your preferred hosting provider (e.g., Vercel, Netlify, AWS).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Fonts: [Google Fonts](https://fonts.google.com/) and custom Bold Font.
- Images: Provided assets in the `public/images` directory.
- Icons: [react-icons](https://react-icons.github.io/) and MUI Icons.

---

## Contributions

Feel free to fork this repository and submit pull requests. Any contributions, improvements, or suggestions are welcome!

---

## Contact

For questions or feedback, reach out via [renanbianchi@gmail.com](mailto:renanbianchi@gmail.com).

