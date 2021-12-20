# Try Angular Firebase Authentication

## Version

```
Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.14
@angular-devkit/build-angular   12.2.14
@angular-devkit/core            12.2.14
@angular-devkit/schematics      12.2.14
@angular/cli                    12.2.14
@schematics/angular             12.2.14
rxjs                            6.6.7
typescript                      4.3.5
firebase                        9.6.1
tailwindcss                     2.2.19
```

## Prerequisites

- Firebase Project has been created.

## Setting

- Set up your Firebase web app information.

```typescript:src/environments/environment.ts
export const environment = {
  firebase: {
    projectId: '',
    appId: '',
    storageBucket: '',
    apiKey: '',
    authDomain: '',
    messagingSenderId: '',
  },
  production: false
};
```

## Development server

- Navigate to `http://localhost:4200/`.

```bash
ng serve
```

## Routing

- Sign-in `http://localhost:4201/sign-in`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Reference Url

- [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation)
