import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBBKd2YXeRs4l_QvFv2VqLaa19NzyrqD2g",
  authDomain: "restless-records-label.firebaseapp.com",
  projectId: "restless-records-label",
  storageBucket: "restless-records-label.appspot.com",
  messagingSenderId: "740388128231",
  appId: "1:740388128231:web:8a06e06b53bb7de22e6942"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);