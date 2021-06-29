import { IFireBaseContext } from './FireBase.context'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

import { firebaseConfig } from './constants'

export type IFireBaseLogEventType = firebase.analytics.Analytics

const useFireBase: () => IFireBaseContext = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app() // if already initialized, use that one
  }
  const analytic = firebase.analytics()

  return {
    logEvent: analytic.logEvent,
  }
}

export default useFireBase
