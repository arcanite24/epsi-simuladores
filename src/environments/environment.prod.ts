import { environment as env } from './environment'

export const environment = {
  production: true,
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
  },
  paypal: 'AWHs7gj9JnaTbF9LIhZOjC7lQ_uH-adbN4zWhVfFzA_zy7EpLz091PjEsGzQSjaEaQuCDHOxe7GMvK5L',
};
