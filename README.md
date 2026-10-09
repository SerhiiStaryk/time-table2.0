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

## PWA install flow

The app offers the browser's native install prompt in Chrome, Edge, Opera, and
Samsung Internet on Android and desktop. Safari on iOS and macOS shows platform
specific Add to Home Screen / Add to Dock instructions; Firefox shows its
available install steps or suggests a supported browser. In-app browsers ask
you to open the page in Safari or Chrome.

To test installation, run `npm run build` and `npm run preview`, then open the
preview over localhost or HTTPS. In Chrome DevTools, check **Application →
Manifest → Installability**. To trigger `beforeinstallprompt` again after an
installation, remove the app from `chrome://apps`.

### Check the project

```sh
npm run compile  # Type-check without emitting files
npm run lint     # Run ESLint
npm test         # Run platform detection tests
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
