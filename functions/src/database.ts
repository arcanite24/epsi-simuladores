import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'
const firestore = admin.firestore()

enum Collections {
  USER = "user",
  USER_STAT = "user-stat",
  EXAM = "exam",
  ASESORIA = "livestream",
  SLIDE = "slide",
  SLIDE_CATEGORY = "slide-cat",
  TODO = "todo",
  CONTENT = "content",
  NOTE = "note",
  COMMENT = "comment",
  RATING = "rating",
  SUGGESTION = "suggestion",
  EVENT = "event",
  GALLERY = "gallery",
  GALLERY_CATEGORY = "gallery-cat",
  THREAD_CATEGORY = "thread-cat",
  THREAD = "thread",
  THREAD_RESPONSE = "thread-response",
  LIVESTREAM = "livestream",
  MEDIA = "media",
  MEDIA_CATEGORY = "media-cat",
  QUESTION = "question",
  ANSWER = "answer",
  EXAM_RESULT = "exam-result",
  POST = "post",
  POST_COMMENT = "post-comment",
  TAG = "tag",
  STAT_VIEW = "stat-view",
  PAYMENT_MODEL = "payment-model",
  PAYMENT_REQUEST = "payment-request",
  NOTIFICATION = "notification",
  NOTIFICATION_RESPONSE = "notification-response",
  NOTIFICATION_COMMENT = "notification-comment",
  COUPON = "coupon",
  MERCADOPAGO_IPN = "mercadopago-ipn",
  PROGRAMA = "programa",
  STAT_COUNTER = "stat-counter",
  LIST = "list",
  QUESTION_STAT = "question-stat",
  CONTENT_ERROR = "content-error",
  EXAM_RANKING = "exam-ranking",
  LANDING_FIELD = "landing-field",
  TAG_POOL = "tag-pool",
  AD_TEXT = "ad-text",
  MOOD_RATE = "mood-rate",
  TUTORIAL = "tutorial",
  DAILY = "daily-noti",
  DAILY_REGISTER = "daily-register",
  UserTimer = "user-timer"
}

const collections = Object.values(Collections);
const triggers = {};

for (const collection of collections) {
  triggers[`dbSync${collection}`.replace(/\-/g, '')] = functions.firestore
    .document(`${collection}/{id}`)
    .onWrite(async (change, context) => {

      const docRef = `db-sync/${collection}`;
      const sync$ = await firestore.doc(docRef).get();

      if (sync$.exists) {

        const total = sync$.data().total;

        if (!change.before.exists) {
          // New document Created : add one to count
          await firestore.doc(docRef).update({
            total: total ? total + 1 : 0,
          });
        } else if (change.before.exists && change.after.exists) {
          // Updating existing document : Do nothing
        } else if (!change.after.exists) {
          // Deleting document : subtract one from count
          await firestore.doc(docRef).update({ total: total ? total - 1 : 0, });
        }

      } else {

        await firestore.doc(docRef).set({
          id: collection,
          collection,
          total: 0,
          last: null,
        });

      }

    });
}

export {
  triggers,
};
