# BusinessRules

# business rules admin-ui
CRUD app for rules, minus the Delete



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


npm install --save json-server or 

npm install -g json-server

Next, create a database.json file inside a server folder with the following object


{    
    "rules": []
}


json-server --watch database.json


https://kaustubhtalathi.medium.com/mock-data-for-angular-5-applications-with-json-server-part-1-d377eced223b

https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/4-add-json-server

--------------------------------------------
npm install bootstrap bootstrap-icons

Edit angular.json file, and add

"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]


--------------------------------------------
npm install @ng-bootstrap/ng-bootstrap@next

app.module.ts file and add the lines as below:

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
  BrowserModule,
  NgbModule,
  AppRoutingModule,
],






https://angular.io/guide/router#generate-an-application-with-routing-enabled

https://www.itsolutionstuff.com/post/angular-12-crud-application-tutorial-exampleexample.html

https://github.com/gokemon/tuts-plus/tree/master/git-notes

https://www.bezkoder.com/angular-15-crud-example/#Create_Data_Service

https://www.tektutorialshub.com/angular/angular-routing-between-modules/

