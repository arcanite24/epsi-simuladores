const express = require('express')
const cors = require('cors')
const moment = require('moment');

import * as admin from 'firebase-admin'

const app = express()
const firestore = admin.firestore()

app.use(cors({ origin: true }))

app.post('/computeUserAverage', async (req, res) => {

  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')

  const {
    user,
    month
  } = req.body

  const _results = await firestore.collection('exam-result').where('user', '==', user).get();
  const results = _results.docs.map(doc => doc.data());

  const total = results.length;

  if (month) {

    const final = results
      .filter((r: ExamResults) => r.promedio)
      .filter((r: ExamResults) => moment(r.date).isSameOrAfter(moment().startOf('month')) && moment(r.date)
        .isSameOrBefore(moment().endOf('month')))
      .map((r: ExamResults) => r.promedio)
      .reduce((a, b) => a + b, 0) / total * 100;

    await firestore.collection('user').doc(user).update({ promedio: final });

    console.log(user, month, total, final)
    return res.json({ promedio: final });


  } else {

    const final = results.map((r: ExamResults) => r.promedio).reduce((a, b) => a + b, 0) / total * 100;

    await firestore.collection('user').doc(user).update({ promedio: final });

    console.log(user, month, total, final)
    return res.json({ promedio: final });

  }

})

export default app

interface ExamResults {
  id: string;
  questions: {};
  lastIndex: number;
  user: string;
  exam: string;
  date: string;
  promedio: number;
  tags: string[];
  exam_type?: string;
  completedIn?: number;
}
