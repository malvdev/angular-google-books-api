# Angular Google Books Api

<blockquote>
  Angular app that uses Google book API to search and get information about books.
</blockquote>

[Live Demo](https://malvdev.github.io/angular-google-books-api/)

## Contents

- [Motivation](#Motivation)
- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)

## Motivation

I wanted to create a book search application using the [Google Books API](https://developers.google.com/books/docs/overview) to try the idea of dividing responsibilities into domains, containing `domain models` (classes, interfaces, types) that are used in the domain, features contain components for the use case, and `UI` contains so-called "dumb components" that are use-case agnostic and thus reusable.

## Features

- Search by book.
- Filter by books.
- Books pagination.
- Book viewing.
- Adding a request to the URL

## Technologies

- [Angular2+](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [NGRX](https://ngrx.io/)
- [Nx](https://nx.dev/angular)
- [Jest](https://jestjs.io)

## Installation

Clone the repository.

Run `npm install` to install the dependencies.

### Development server

Run `ng serve shell` for a dev server.

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build

Run `ng build shell` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test shell` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e shell` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
