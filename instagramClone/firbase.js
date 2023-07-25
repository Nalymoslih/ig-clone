// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLSbrL76BN96nDZHXPNqiq0mYKZgsvmiU',
  authDomain: 'instagram-clone-f4a24.firebaseapp.com',
  projectId: 'instagram-clone-f4a24',
  storageBucket: 'instagram-clone-f4a24.appspot.com',
  messagingSenderId: '278688942719',
  appId: '1:278688942719:web:141c67f5c104e78c928d4a',
  measurementId: 'G-S4FQ4Z84EC',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
// const app = initializeApp(firebaseConfig);/
// const analytics = getAnalytics(app);
