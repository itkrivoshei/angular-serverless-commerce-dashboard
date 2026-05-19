# Angular Serverless Commerce Dashboard

Angular commerce dashboard connected to an AWS serverless API layer. The application is deployed on GitHub Pages and loads normalized product data through API Gateway and Lambda.

## Live Demo

Demo: https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/

## Overview

This project demonstrates a small production-style frontend and serverless integration:

```text
GitHub Pages
    ↓
Angular dashboard
    ↓
AWS API Gateway
    ↓
AWS Lambda proxy
    ↓
External product data API
```

The Angular frontend displays commerce product data in a responsive dashboard UI. The backend layer uses AWS Lambda as a lightweight API proxy that fetches external product data, normalizes the response shape, and returns the fields expected by the frontend table.

This repository is kept public as a cloud-adjacent frontend project showing Angular, TypeScript, NgRx, AWS Lambda/API Gateway integration, and automated GitHub Pages deployment.

## Architecture

- **Frontend:** Angular application deployed as a static site on GitHub Pages.
- **API layer:** AWS API Gateway exposes a public HTTP endpoint for the frontend.
- **Serverless backend:** AWS Lambda fetches and normalizes product data.
- **State management:** NgRx is used for loading and storing commerce data.
- **Deployment:** GitHub Actions builds and deploys the Angular app to GitHub Pages.

## Tech Stack

- Angular
- TypeScript
- Angular Material
- NgRx
- RxJS
- SCSS
- AWS Lambda
- AWS API Gateway
- GitHub Actions
- GitHub Pages

## Features

- Responsive commerce dashboard UI
- Product inventory table
- Serverless API integration through AWS Lambda and API Gateway
- Normalized product data model
- NgRx-based state handling
- Load more functionality with pagination parameters
- Production GitHub Pages build configuration
- Automated deployment through GitHub Actions

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── commerce-table/
│   │   ├── services/
│   │   └── store/
│   │       ├── actions/
│   │       ├── effects/
│   │       └── reducers/
│   ├── environments/
│   ├── assets/
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

## Data Flow

```text
User opens dashboard
    ↓
Angular component dispatches load action
    ↓
NgRx effect calls CommerceService
    ↓
CommerceService requests API Gateway endpoint
    ↓
Lambda fetches product data from external API
    ↓
Lambda maps data to frontend table format
    ↓
NgRx reducer updates dashboard state
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open the app locally:

```text
http://localhost:4200/
```

## Build

Create a production build:

```bash
npm run build
```

Create a GitHub Pages build:

```bash
npm run build:pages
```

The GitHub Pages build uses the correct repository base path:

```text
/angular-serverless-commerce-dashboard/
```

## Deployment

This project uses GitHub Actions for deployment.

On every push to `main`, the workflow:

1. Installs dependencies
2. Builds the Angular app
3. Prepares the static artifact
4. Deploys the result to GitHub Pages

Workflow file:

```text
.github/workflows/deploy-pages.yml
```

## Environment Configuration

The API endpoint is configured in:

```text
src/environments/environment.ts
src/environments/environment.prod.ts
```

Both files point the Angular app to the AWS API Gateway endpoint used by the Lambda proxy.

Only public API Gateway URLs should be stored in frontend environment files. Do not commit AWS access keys, secret keys, tokens, or private credentials.

## Testing

Run unit tests:

```bash
npm test
```

Test files include:

- `src/app/app.component.spec.ts`
- `src/app/components/commerce-table/commerce-table.component.spec.ts`
- `src/app/services/commerce.service.spec.ts`

## Portfolio Notes

This project is intended to show practical experience with:

- Angular frontend development
- TypeScript application structure
- Component-based UI implementation
- NgRx actions, effects, and reducers
- API service abstraction
- Serverless backend integration
- AWS Lambda and API Gateway
- Static hosting with GitHub Pages
- CI/CD workflow configuration with GitHub Actions

## Status

Active portfolio project.

The original external data source was replaced with a more stable API source behind the AWS Lambda proxy. The frontend continues to consume a normalized commerce data model through the serverless API layer.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
