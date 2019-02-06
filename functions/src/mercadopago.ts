const express = require('express')
const cors = require('cors')

import * as mercadopago from 'mercadopago'
import * as admin from 'firebase-admin'

const app = express()
const firestore = admin.firestore()

const RETURN_URL_PROD = 'https://epsi-simuladores.firebaseapp.com/pago/status'
const RETURN_URL_DEV = 'http://localhost:4200/pago/status'

app.use(cors({ origin: true }))

app.post('/generate_payment', async (req, res) => {

  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')

  const {
    model_id,
    request_id,
    title,
    amount,
    email,
    isProd
  } = req.body

  console.log('GENERATE PAYMENT', req.body, new Date().toISOString())
  const return_url = `${isProd ? RETURN_URL_PROD : RETURN_URL_DEV}/${request_id}`

  const preference = {
    //binary_mode: true,
    external_reference: request_id,
    back_urls: {
      success: return_url,
      failure: return_url.replace('/pago/status', ''),
      pending: return_url,
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

      if (data.status == 'approved') {

        // Give user permissions
        const request$ = await firestore.doc(`payment-request/${data.external_reference}`).get()
        const r = request$.data()

        const user$ = await firestore.doc(`user/${r.user}`).get()
        const user = user$.data()

        let role_payload = {}

        for (const role of r.model.unlocks) {
          role_payload[role] = true
        }

        await firestore.doc(`user/${r.user}`).update(role_payload)
        await firestore.doc(`payment-request/${data.external_reference}`).update({delivered: true})
        if(r.coupon) await firestore.doc(`coupon/${r.coupon}`).update({used: true, date: new Date().toISOString(), user})

      }

    }

    return res.status(201).json({created: true})

  } catch (error) {
    console.log(error)
    return res.status(200).json({created: false, error})
  }

})

export default app