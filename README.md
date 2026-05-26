# Angular Serverless Commerce Dashboard

[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-0969da?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/angular-serverless-commerce-dashboard/deploy-pages.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/angular-serverless-commerce-dashboard/actions/workflows/deploy-pages.yml)
[![Angular](https://img.shields.io/badge/angular-21-dd0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-16a34a?style=for-the-badge)](LICENSE)

A polished Angular dashboard for browsing commerce product data served through an
AWS serverless API. The frontend is built with Angular Material, NgRx Store and
Effects, RxJS, and SCSS, then deployed automatically to GitHub Pages.

## Live Demo

[Open the dashboard](https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/)

## Highlights

- Clean Angular 21 app module structure
- NgRx-powered loading, success, and failure states
- Responsive Material data table with incremental product loading
- AWS API Gateway endpoint backed by a Lambda proxy
- GitHub Actions deployment to GitHub Pages
- Lockfile-based installs for reproducible builds

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | [Angular](https://angular.dev/), [Angular Material](https://material.angular.io/) |
| State | [NgRx Store](https://ngrx.io/guide/store), [NgRx Effects](https://ngrx.io/guide/effects), [RxJS](https://rxjs.dev/) |
| Styling | SCSS, Material theme |
| Backend integration | [AWS API Gateway](https://aws.amazon.com/api-gateway/), [AWS Lambda](https://aws.amazon.com/lambda/) |
| Delivery | [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/) |

## Getting Started

Requirements:

- [Node.js](https://nodejs.org/) 20.19+, 22.12+, or 24+
- npm

Install dependencies:

```bash
npm ci
```

Run locally:

```bash
npm start
```

The development server opens at:

```text
http://localhost:4200/
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server |
| `npm run build` | Create a production build |
| `npm run build:pages` | Build with the GitHub Pages base path |
| `npm test` | Run the interactive Karma test watcher |
| `npm run test:ci` | Run tests once in Chrome Headless |

## Configuration

The public API URL is configured in:

```text
src/environments/environment.ts
src/environments/environment.prod.ts
```

Only frontend-safe values belong in these files. Do not commit AWS credentials,
tokens, access keys, or private infrastructure settings.

## Deployment

Deployment is handled by [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`
2. Runs the CI test command
3. Builds the Angular app for the repository base path
4. Uploads the static artifact
5. Publishes it to GitHub Pages

## Project Structure

```text
.
├── .github/workflows/deploy-pages.yml
├── src/
│   ├── app/
│   │   ├── components/commerce-table/
│   │   ├── models/
│   │   ├── services/
│   │   └── store/
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

## License

Released under the [MIT License](LICENSE).
