import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBBKd2YXeRs4l_QvFv2VqLaa19NzyrqD2g",
  authDomain: "restless-records-label.firebaseapp.com",
  projectId: "restless-records-label",
  storageBucket: "restless-records-label.appspot.com",
  messagingSenderId: "740388128231",
  appId: "1:740388128231:web:8a06e06b53bb7de22e6942"
};

export const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
export const auth = getAuth(app);