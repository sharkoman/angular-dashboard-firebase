// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCv-U7X7RNfVP5r-2E0NCB_qZfUGSWh1nY",
    authDomain: "ng-cources.firebaseapp.com",
    databaseURL: "https://ng-cources.firebaseio.com",
    projectId: "ng-cources",
    storageBucket: "ng-cources.appspot.com",
    messagingSenderId: "472541577587"
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
