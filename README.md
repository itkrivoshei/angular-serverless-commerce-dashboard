<div align="center">

# Angular Serverless Commerce Dashboard

Commerce data dashboard built with Angular, Angular Material, NgRx, and an AWS API Gateway/Lambda proxy.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/angular-serverless-commerce-dashboard/deploy-pages.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/angular-serverless-commerce-dashboard/actions/workflows/deploy-pages.yml)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![NgRx](https://img.shields.io/badge/NgRx-21-BA2BD2?style=for-the-badge&logo=redux&logoColor=white)](https://ngrx.io/)
[![License](https://img.shields.io/badge/license-MIT-16a34a?style=for-the-badge)](LICENSE)

</div>

## Snapshot

The app loads paginated commerce product data from a public AWS endpoint and renders it in a responsive Material table. Data fetching, loading state, and error state are driven through NgRx actions, reducers, and effects.

| Layer | Implementation |
| --- | --- |
| UI | Angular 21, Angular Material table, SCSS |
| State | NgRx Store and Effects |
| Data | `CommerceService` with `HttpClient` |
| API | AWS API Gateway endpoint backed by a Lambda proxy |
| Delivery | GitHub Actions to GitHub Pages |

## What it does

- Fetches product rows in `20` item chunks with `limit` and `skip` query params.
- Shows product name, material, department, and price in a Material table.
- Keeps load/error/data transitions in a dedicated NgRx feature slice.
- Uses separate Angular environment files for the API URL.
- Publishes the production build from `.github/workflows/deploy-pages.yml`.

## Run Locally

```bash
git clone https://github.com/itkrivoshei/angular-serverless-commerce-dashboard.git
cd angular-serverless-commerce-dashboard
npm ci
npm start
```

Open `http://localhost:4200/`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Angular dev server |
| `npm run build` | Build the production app |
| `npm run build:pages` | Build with `/angular-serverless-commerce-dashboard/` as the base path |
| `npm test` | Run the Karma test runner |
| `npm run test:ci` | Run tests once in Chrome Headless |

## API Configuration

The public API endpoint is defined in:

```text
src/environments/environment.ts
src/environments/environment.prod.ts
```

Only browser-safe values belong there. AWS credentials, tokens, and private infrastructure settings should stay outside the repository.

## Repository Map

```text
src/app/
├── components/commerce-table/   # Material table UI
├── models/                      # Commerce item shape
├── services/                    # HTTP integration
└── store/                       # NgRx actions, effects, reducers
```

## Deployment

Pushes to `main` run tests, build the Angular app with the GitHub Pages base path, upload the static artifact, and publish it through GitHub Pages.

## License

[MIT](LICENSE)
