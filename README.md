# Time Table 2.0

A modern web application for displaying and managing school lesson schedules, built with React, TypeScript, and Material UI.

## Features

- 📅 View weekly lesson schedules for two groups
- 🛎️ See the current lesson and bell times
- 🌗 Light, dark, and system color modes
- 📱 Responsive design for desktop and mobile
- 🇺🇦 Ukrainian language interface
- 🏖️ Holiday calendar
- ⚡️ PWA support (installable, offline-ready)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open http://localhost:5173/time-table2.0/ in your browser.

### Build

```sh
npm run build
```

The production-ready files will be in the dist/ directory.

### Preview Production Build

```sh
npm run preview
```

## Deployment

This project is configured to deploy to GitHub Pages. The deployment workflow is defined in .github/workflows/deploy.yml.

## Project Structure

```bash
src/               # Main source code
├── components/    # Reusable UI components
├── constants/     # Static data (lessons, schedule, etc.)
├── controller/    # State management (e.g., group selection)
├── theme/         # Custom Material UI theme and color mode
├── pages/         # Application pages
├── helpers/       # Utility functions
public/            # Static assets (icons, screenshots, etc.)
```

## License

MIT
