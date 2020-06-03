import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

import * as algoliasearch from 'algoliasearch'
import * as algoliaSync from 'algolia-firestore-sync'
import * as mercadopago from 'mercadopago'

const env = functions.config()
admin.initializeApp()

// Custom HTTP Functions
import MercadoPagoFunctions from './mercadopago'
import ZamnademyFunctions from './zamnademy'
// import { triggers } from './database';

// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey)
const index = client.initIndex('dev_QUESTIONS')

// Initialzie MercadoPago
mercadopago.configure({
  client_id: env.mercadopago.id,
  client_secret: env.mercadopago.secret
})

// Algolia
exports.syncQuestions = functions.firestore
  .document('question/{id}')
  .onWrite((change, context) => {
    return algoliaSync.syncAlgoliaWithFirestore(index, change, context)
  })

// MercadoPago
exports.pay = functions.https.onRequest(MercadoPagoFunctions)

// Zamnademy
exports.zamna = functions.https.onRequest(ZamnademyFunctions)

// Database triggers
// for (const [name, trigger] of Object.entries(triggers)) {
//   exports[name] = trigger;
// }
