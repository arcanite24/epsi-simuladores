const express = require('express')
const cors = require('cors')
const uuid = require('uuid')

import * as mercadopago from 'mercadopago'
import * as admin from 'firebase-admin'

const app = express()
const firestore = admin.firestore()

const RETURN_URL_PROD = 'https://zamnademy.com/pago/status'
const RETURN_URL_DEV = 'http://localhost:4200/pago/status'

const RETURN_URL_PROD_PAGOS = 'https://zamnademy.com/pagos'
const RETURN_URL_DEV_PAGOS = 'http://localhost:8100'

export enum Roles {
  Admin = 'isAdmin',

  Esencial = 'isEsencial',
  Premium = 'isPremium',
  Temprano = 'isTemprano',
  Premium2019 = 'isPremium2019',
  Zamna360_2019 = 'is3602019',

  Esencial360 = 'isEsencial360', // CURSO_ESENCIAL_360
  Premium360 = 'isPremium360', // CURSO_PREMIUM_360
  Presencial = 'isPresencial', // CURSO_PRESENCIAL

  Content = 'isContent',
  Checklist = 'isChecklist',
  Calendar = 'isCalendar',
  SmartCalendar = 'isSmartCalendar',
  TopUsers = 'isTopUsers',
  Galleries = 'isGalleries',
  Simuladores = 'isSimuladores',
  Forum = 'isForum',
  Streaming = 'isStreaming',
  Media = 'isMedia',
  Slides = 'isSlides',
  Simulacros = 'isSimulacros',
  Feed = 'isFeed',
  Programa = 'isPrograma',
  Pool = 'isPool',
  TagPool = 'isTagPool',
  ZonaEnarm = 'isZonaEnarm',
}

export const EsencialModel: string[] = [
  Roles.Esencial,
  Roles.Checklist,
  Roles.Calendar,
  Roles.TopUsers,
  Roles.Galleries,
  Roles.Feed,

  Roles.Simuladores,
  Roles.Forum,
  Roles.Streaming,
  Roles.Media,
  Roles.Slides,
  Roles.Simulacros,
]

export const PremiumModel: string[] = [
  Roles.Checklist,
  Roles.Calendar,
  Roles.TopUsers,
  Roles.Galleries,
  Roles.Feed,

  Roles.Simuladores,
  Roles.Forum,
  Roles.Streaming,
  Roles.Media,
  Roles.Slides,
  Roles.Simulacros,
  Roles.Premium,
  Roles.Content,
  Roles.Programa,
  Roles.Pool,
  Roles.TagPool
]

export const Premium2019Model: string[] = [
  Roles.Checklist,
  Roles.SmartCalendar,
  Roles.TopUsers,
  Roles.Galleries,
  Roles.Feed,
  Roles.Forum,
  Roles.Streaming,
  Roles.Media,
  Roles.Slides,
  Roles.Premium2019,
  Roles.Programa,
  Roles.ZonaEnarm,
]

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
      failure: return_url,
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

app.post('/generate_payment_zamna_pagos', async (req, res) => {

  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')

  const {
    control_id,
    pago_id,
    title,
    amount,
    email,
    isProd
  } = req.body

  console.log('GENERATE PAYMENT', req.body, new Date().toISOString())
  const return_url = `${isProd ? RETURN_URL_PROD_PAGOS : RETURN_URL_DEV_PAGOS}/`

  const preference = {
    //binary_mode: true,
    external_reference: `ZAMNA_PAGOS#${control_id}#${pago_id}`,
    back_urls: {
      success: return_url,
      failure: return_url,
      pending: return_url,
    },
    auto_return: 'approved',
    items: [
      {
        id: control_id,
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

      if (data.external_reference.includes('ZAMNA_PAGOS')) {

        // Handle Zamna Pagos Callback
        const info = data.external_reference.split('#')
        const control_id = info[1]
        const pago_id = info[2]

        console.log('zamna pagos info', info)

        await firestore.doc(`control-pago/${control_id}`).update({
          last_status: data.status,
          ipn: data.id
        })

        if (data.status === 'approved') {

          // Restar user amount
          const _control = await firestore.doc(`control-pago/${control_id}`).get()
          const control = _control.data()

          const _user = await firestore.collection(`user`).where('email', '==', control.user.email).get()
          const user = _user.docs[0].data()

          await firestore.doc(`user/${user.uid}`).update({deuda: user.deuda - data.transaction_amount})
          await firestore.doc(`control-pago/${control.id}`).update({amountLeft: control.amountLeft - data.transaction_amount})

          await grantUserRoles(user.uid, control.price, control.amountLeft - data.transaction_amount, control.tag)

          // Update PagoZamna doc
          await firestore.collection(`zamna-pago`).doc(pago_id).update({
            status: data.status,
            restado: true,
            createdAt: data.date_created,
            pago: {
              status: data.status,
              restado: true
            },
          })

        }

      } else {

        // Handle Zamnademy Callbck
        await firestore.doc(`payment-request/${data.external_reference}`).update({
          status: data.status,
          ipn: data.id
        })

        if (data.status === 'approved') {

          // Give user permissions
          const request$ = await firestore.doc(`payment-request/${data.external_reference}`).get()
          const r = request$.data()

          const user$ = await firestore.doc(`user/${r.user}`).get()
          const user = user$.data()

          const role_payload = {}

          if (r.model) {
            for (const role of r.model.unlocks) {
              role_payload[role] = true
            }
          }

          if (r.unlocks) {
            for (const role of r.unlocks) {
              role_payload[role] = true;
            }
          }

          if (r.subscription) {

            role_payload['subscription'] = r.subscription;

            const sub = {
              id: `${r.user}-sub-${r.model.unlocks.join('|')}`,
              user,
              roles: r.model.unlocks,
              limit: r.subscription,
              date: new Date().toISOString(),
            };

            await firestore.collection('subscription').doc(sub.id).set({ ...sub });

          }

          console.log('DECIDE IF WE GRANT COUPONS', r.pack, r)
          if (r.pack) {
            for (let index = 0; index < r.pack.quantity - 1; index++) {

              const coupon_payload = {
                code: `ZAMNA-${uuid.v4()}`,
                date: new Date().toISOString(),
                used: false,
                value: 100,
                owner: r.user
              }

              await firestore.collection(`coupon`).add(coupon_payload)

            }
          }

          await firestore.doc(`user/${r.user}`).update(role_payload)
          await firestore.doc(`payment-request/${data.external_reference}`).update({delivered: true})
          if(r.coupon) await firestore.doc(`coupon/${r.coupon}`).update({used: true, date: new Date().toISOString(), user})

        }

      }

    }

    return res.status(201).json({created: true})

  } catch (error) {
    console.log(error)
    return res.status(200).json({created: false, error})
  }

})

async function grantUserRoles(uid: string, price: number, amountLeft: number, tag: string) {

  const per30 = Math.ceil(price * 0.3)
  const pagado = price - amountLeft

  if (pagado >= per30) {

    const payload = {}

    if (tag === 'isPremium360') {
      for (const role of Premium2019Model) {
        payload[role] = true
      }
    }

    if (tag === 'isEsencial360') {
      for (const role of EsencialModel) {
        payload[role] = true
      }
    }

    try {
      await firestore.doc(`user/${uid}`).update(payload)
      console.log('granted roles to', uid, payload, tag, price, amountLeft, per30, pagado)
      return true
    } catch (error) {
      console.log('error granting roles', uid, payload, tag, price, amountLeft, per30, pagado)
      console.log(error)
      return false
    }

  } else {
    return false
  }

}

export default app
