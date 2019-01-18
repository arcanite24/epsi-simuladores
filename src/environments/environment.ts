// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAkRoZR2ihUIsS6Z7Dt8EF5LY5AgKdcS-I",
    authDomain: "epsi-simuladores.firebaseapp.com",
    databaseURL: "https://epsi-simuladores.firebaseio.com",
    projectId: "epsi-simuladores",
    storageBucket: "epsi-simuladores.appspot.com",
    messagingSenderId: "109307489918"
  },
  ui: {
    defaultAvatar: 'https://via.placeholder.com/128'
  },
  algolia: {
    appId: 'M30SUGBQKI',
    apiKey: 'f042b2ddd7c5ecfc8c93f1367e6d9625'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
