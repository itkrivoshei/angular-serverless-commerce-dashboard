<div align="center">

# Angular Serverless Commerce Dashboard

Commerce data dashboard built with Angular, Angular Material, NgRx, and an AWS API Gateway/Lambda proxy.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/angular-serverless-commerce-dashboard/deploy-pages.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/angular-serverless-commerce-dashboard/actions/workflows/deploy-pages.yml)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white&labelColor=0f172a)](https://angular.dev/)
[![NgRx](https://img.shields.io/badge/NgRx-21-BA2BD2?style=for-the-badge&logo=redux&logoColor=white&labelColor=0f172a)](https://ngrx.io/)
[![License](https://img.shields.io/badge/license-MIT-16a34a?style=for-the-badge&labelColor=0f172a)](LICENSE)

</div>

## Snapshot

The app loads paginated commerce product data from a public AWS endpoint and renders it in a responsive Angular Material table.

Data fetching, loading state, error handling, and table updates are managed through a dedicated NgRx feature slice with actions, reducers, selectors, and effects.

| Layer    | Implementation                                                                                                                               |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| UI       | [Angular 21](https://angular.dev/), [Angular Material](https://material.angular.dev/) table, SCSS                                            |
| State    | [NgRx Store and Effects](https://ngrx.io/)                                                                                                   |
| Data     | `CommerceService` with Angular [`HttpClient`](https://angular.dev/guide/http)                                                                |
| API      | AWS API Gateway endpoint backed by a Lambda proxy                                                                                            |
| Delivery | [GitHub Actions](.github/workflows/deploy-pages.yml) to [GitHub Pages](https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/) |

## What it does

- Fetches product rows in `20` item chunks with `limit` and `skip` query parameters.
- Shows product name, material, department, and price in a responsive Material table.
- Keeps loading, error, and data transitions in a dedicated NgRx feature slice.
- Uses separate Angular environment files for local and production API configuration.
- Builds and deploys the production app through [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## Tech Stack

| Area       | Tools                                                              |
| ---------- | ------------------------------------------------------------------ |
| Framework  | [Angular 21](https://angular.dev/)                                 |
| UI         | [Angular Material](https://material.angular.dev/), SCSS            |
| State      | [NgRx](https://ngrx.io/)                                           |
| API client | Angular [`HttpClient`](https://angular.dev/guide/http)             |
| Backend    | AWS API Gateway / Lambda proxy                                     |
| Runtime    | [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/)      |
| Delivery   | [GitHub Actions](.github/workflows/deploy-pages.yml), GitHub Pages |

## Run Locally

```bash
git clone https://github.com/itkrivoshei/angular-serverless-commerce-dashboard.git
cd angular-serverless-commerce-dashboard
npm ci
npm start
```

Open `http://localhost:4200/`.

## Commands

Scripts are defined in [`package.json`](package.json).

| Command               | Purpose                                                           |
| --------------------- | ----------------------------------------------------------------- |
| `npm start`           | Start the Angular dev server                                      |
| `npm run build`       | Build the production app                                          |
| `npm run build:pages` | Build with `/angular-serverless-commerce-dashboard/` as base path |
| `npm test`            | Run the Karma test runner                                         |
| `npm run test:ci`     | Run tests once in Chrome Headless                                 |

## API Configuration

The public API endpoint is defined in:

- [`src/environments/environment.ts`](src/environments/environment.ts)
- [`src/environments/environment.prod.ts`](src/environments/environment.prod.ts)

Only browser-safe values belong there. AWS credentials, tokens, and private infrastructure settings should stay outside the repository.

## Repository Map

```text
src/app/
├── components/commerce-table/   # Material table UI
├── models/                      # Commerce item shape
├── services/                    # HTTP integration
└── store/                       # NgRx actions, effects, reducers
```

Key project files:

- [`angular.json`](angular.json) defines Angular project configuration.
- [`package.json`](package.json) defines scripts and npm dependencies.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds, tests, uploads, and deploys the app.

## Deployment

Pushes to [`main`](https://github.com/itkrivoshei/angular-serverless-commerce-dashboard/tree/main) run the deployment workflow, execute the test/build gate, build the Angular app with the GitHub Pages base path, upload the static artifact, and publish it through GitHub Pages.

Deployment workflow:

- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

Live app:

- [`itkrivoshei.github.io/angular-serverless-commerce-dashboard`](https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/)

## License

[MIT](LICENSE)
