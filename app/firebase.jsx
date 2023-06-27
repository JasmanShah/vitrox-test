// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCG62zVByyD-MLDYEzC7YjNjh-7qm4CrSI',
  authDomain: 'vitrox-test.firebaseapp.com',
  projectId: 'vitrox-test',
  storageBucket: 'vitrox-test.appspot.com',
  messagingSenderId: '738753457352',
  appId: '1:738753457352:web:2541495dc18e90a96f89fd',
  measurementId: 'G-V4B9TDETGS'
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
