import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as algoliasearch from 'algoliasearch'
import * as algoliaSync from 'algolia-firestore-sync'

const env = functions.config()
admin.initializeApp()

// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey)
const index = client.initIndex('dev_QUESTIONS')

exports.syncQuestions = functions.firestore
  .document('question/{id}')
  .onWrite((change, context) => {
    return algoliaSync.syncAlgoliaWithFirestore(index, change, context)
  })