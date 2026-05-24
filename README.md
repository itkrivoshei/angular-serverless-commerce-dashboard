# Angular Serverless Commerce Dashboard

[![Pages workflow](https://img.shields.io/github/actions/workflow/status/itkrivoshei/angular-serverless-commerce-dashboard/deploy-pages.yml?branch=main&style=flat-square&label=pages)](https://github.com/itkrivoshei/angular-serverless-commerce-dashboard/actions/workflows/deploy-pages.yml)
[![Angular](https://img.shields.io/badge/Angular-17-dd0031?style=flat-square&logo=angular)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?style=flat-square&logo=typescript&logoColor=white)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Angular commerce dashboard that reads normalized product data from an AWS API Gateway endpoint backed by a Lambda proxy.

## Tech stack

- Angular 17
- TypeScript
- Angular Material
- NgRx Store and Effects
- RxJS
- SCSS
- GitHub Actions
- GitHub Pages

## Scope

This repository contains the Angular frontend. It consumes a public API Gateway endpoint configured in `src/environments/`.

The Lambda/API Gateway implementation and infrastructure configuration are not included in this repository.

## Live demo

```text
https://itkrivoshei.github.io/angular-serverless-commerce-dashboard/
```

## Install

```bash
npm ci
```

## Run locally

```bash
npm start
```

Local development server:

```text
http://localhost:4200/
```

## Build

Production build:

```bash
npm run build
```

GitHub Pages build:

```bash
npm run build:pages
```

## Test

Interactive test runner:

```bash
npm test
```

CI-safe test command:

```bash
npm run test:ci
```

## Deployment

GitHub Pages deployment is handled by GitHub Actions.

Workflow file:

```text
.github/workflows/deploy-pages.yml
```

On push to `main`, the workflow installs dependencies, runs tests, builds the Angular app with the GitHub Pages base path, prepares the static artifact, and deploys it to GitHub Pages.

## Project structure

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

## Environment configuration

The frontend API endpoint is configured in:

```text
src/environments/environment.ts
src/environments/environment.prod.ts
```

Only public frontend-safe URLs should be stored there. Do not commit AWS credentials, access keys, tokens, or private configuration.

## License

This project is licensed under the [MIT License](LICENSE).
