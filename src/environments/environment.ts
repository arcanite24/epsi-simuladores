// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDBmqeyl06tkORD0Lms2fg3LFGIs3PfvaU",
    authDomain: "epsi-simuladores-645d4.firebaseapp.com",
    databaseURL: "https://epsi-simuladores-645d4.firebaseio.com",
    projectId: "epsi-simuladores-645d4",
    storageBucket: "epsi-simuladores-645d4.appspot.com",
    messagingSenderId: "96794283612",
    appId: "1:96794283612:web:445c58feb7325979"
  },
  ui: {
    defaultAvatar: 'https://via.placeholder.com/128'
  },
  algolia: {
    appId: 'M30SUGBQKI',
    apiKey: 'f042b2ddd7c5ecfc8c93f1367e6d9625'
  },
  paypal: 'AXD_aOCopqUyduDmDGWXJ0HbBhquAANCu37LEt3yXn40T3gU0ns-12nDt-zdvB4tIUSYBembxZ84UcSC',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
