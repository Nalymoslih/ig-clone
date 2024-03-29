import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import AuthNavigation from './AuthNavigation';
import {Provider} from 'react-redux';
import {Store} from '../instagramClone/redux/Store';

function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBLSbrL76BN96nDZHXPNqiq0mYKZgsvmiU',
        authDomain: 'instagram-clone-f4a24.firebaseapp.com',
        projectId: 'instagram-clone-f4a24',
        storageBucket: 'instagram-clone-f4a24.appspot.com',
        messagingSenderId: '278688942719',
        appId: '1:278688942719:web:141c67f5c104e78c928d4a',
        measurementId: 'G-S4FQ4Z84EC',
      });
    } else {
      firebase.app();
    }
  }, []);
  return (
    <Provider store={Store}>
      <AuthNavigation />
    </Provider>
  );
}

export default App;
