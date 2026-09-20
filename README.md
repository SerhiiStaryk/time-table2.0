# Time Table 2.0

A React and TypeScript web application for viewing school lesson schedules. The interface is built with Material UI and is available in Ukrainian.

## Features

- 📅 View weekly lesson schedules for two child profiles
- 🔁 Switch between the first and second schedule
- 🛎️ See the current lesson and bell times
- 🌗 Light, dark, and system color modes
- 📱 Responsive design for desktop and mobile
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

### Start the development server

```sh
npm run dev
```

Open the local URL printed by Vite. The deployed base path is `/time-table2.0/`.

### Create a production build

```sh
npm run build
```

The production-ready files are written to `dist/`.

### Preview the production build

```sh
npm run preview
```

### Check the project

```sh
npm run compile  # Type-check without emitting files
npm run lint     # Run ESLint
```

## Deployment

The project is configured for GitHub Pages at https://serhiistaryk.github.io/time-table2.0/. Build and deploy it with:

```sh
npm run deploy
```

The `predeploy` script runs the production build before publishing `dist/`.

## Project Structure

```bash
src/               # Application source code
├── components/    # Reusable UI components
├── constants/     # Lessons, schedules, dates, and other static data
├── controller/    # Child and schedule selection state
├── pages/         # Home and About routes
├── theme/         # Material UI theme and color mode
├── helpers/       # Shared utility functions
public/            # Public static assets
```

## License

MIT
