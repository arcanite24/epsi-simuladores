import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const mercadopago = require('mercadopago')

const env = functions.config()
admin.initializeApp()

// Custom HTTP Functions
import MercadoPagoFunctions from './mercadopago'

// Initialzie MercadoPago
mercadopago.configure({
  client_id: env.mercadopago.id,
  client_secret: env.mercadopago.secret
})

// MercadoPago
exports.pay = functions.https.onRequest(MercadoPagoFunctions)
