const express = require('express')
const cors = require('cors')

import * as mercadopago from 'mercadopago'
import * as admin from 'firebase-admin'

const app = express()
const firestore = admin.firestore()

const RETURN_URL = 'https://epsi-simuladores.firebaseapp.com/pago/status'

app.use(cors({ origin: true }))

app.post('/generate_payment', async (req, res) => {

  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')

  const {
    model_id,
    request_id,
    title,
    amount,
    email
  } = req.body

  console.log('GENERATE PAYMENT', req.body, new Date().toISOString())

  const preference = {
    external_reference: request_id,
    back_urls: {
      success: `${RETURN_URL}/${request_id}`,
      failure: `${RETURN_URL}/${request_id}`,
      pending: `${RETURN_URL}/${request_id}`,
    },
    auto_return: 'approved',
    items: [
      {
        id: model_id,
        title: title,
        quantity: 1,
        currency_id: 'MXN',
        unit_price: parseFloat(amount)
      }
    ],
    payer: {
      email,
    }
  }

  const ref = await mercadopago.preferences.create(preference)
  return res.json(ref.body)

})

app.post('/webhook', async (req, res) => {

  try {

    // Register MercadoPago IPN
    const payment = await mercadopago.ipn.manage(req)
    const data = {
      card: payment.body.card,
      payer: payment.body.payer,
      operation_type: payment.body.operation_type,
      payment_method_id: payment.body.payment_method_id,
      payment_type_id: payment.body.payment_type_id,
      status: payment.body.status,
      transaction_amount: payment.body.transaction_amount,
      id: payment.body.id,
      ipn_id: payment.body.id,
      description: payment.body.description,
      external_reference: payment.body.external_reference,
      date_created: payment.body.date_created,
      date_approved: payment.body.date_approved,
    }
    console.log(data)
    await firestore.collection('mercadopago-ipn').add(data)

    // Update Payment Request
    if (data.external_reference) {
      await firestore.doc(`payment-request/${data.external_reference}`).update({
        status: data.status,
        ipn: data.id
      })
    }

    return res.status(201).json({created: true})

  } catch (error) {
    console.log(error)
    return res.status(200).json({created: false, error})
  }

})

export default app